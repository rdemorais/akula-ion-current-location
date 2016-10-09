angular.module('ion-current-location', [])
    .directive('ionCurrentLocation', ionCurrentLocation);

    function ionCurrentLocation() {
        return {
            require: '?ngModel',
            restrict: 'A',
            scope: {
                ngModel: '=?'
            },
            link: function(scope, element, attrs, ngModel) {
                console.log(element);
                console.log('directive ion');
            }
        }
    }