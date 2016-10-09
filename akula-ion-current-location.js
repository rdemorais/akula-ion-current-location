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
                element.on('click', function() {
                    getLocation().then(function(position) {
                        console.log(position);
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
            }
        }        
    }