angular.module('ion-current-location', [])
    .directive('ionCurrentLocation', ionCurrentLocation);

    ionCurrentLocation.$inject = ['$q']
    function ionCurrentLocation($q) {
        return {
            require: '?ngModel',
            restrict: 'A',
            scope: {
                ngModel: '=?'
            },
            link: function(scope, element, attrs, ngModel) {
                var geocoder = new google.maps.Geocoder();

                element.on('click', function() {

                    getLocation()
                        .then(reverseGeocoding)
                        .then(function(location) {
                            ngModel.$setViewValue(location);
                            ngModel.$render();
                        });
                });

                function getLocation() {
                    return $q(function (resolve, reject) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            resolve(position);
                        }, function (error) {
                            error.from = 'getLocation';
                            reject(error);
                        });
                    });
                }

                function reverseGeocoding(location) {
                    return $q(function (resolve, reject) {
                        var latlng = {
                            lat: location.coords.latitude,
                            lng: location.coords.longitude
                        };
                        geocoder.geocode({'location': latlng}, function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    resolve(results[1]);
                                } else {
                                    resolve(results[0])
                                }
                            } else {
                                var error = {
                                    status: status,
                                    from: 'reverseGeocoding'
                                };
                                reject(error);
                            }
                        })
                    });
                }
            }
        }        
    }