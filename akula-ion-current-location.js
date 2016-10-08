angular.module('ion-current-location', [])
    .directive('ionCurrentLocation', ionCurrentLocation);

    function ionCurrentLocation() {
        return {
            require: '?ngModel',
            restrict: 'E',
            scope: {
                ngModel: '=?'
            }
            controller: controller
        }

        function controller(scope, element, attrs, ngModel) {
            console.log('ionCurrentLocation');
            console.log(ngModel);
        }
    }