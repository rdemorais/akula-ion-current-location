angular.module('ion-current-location', [])
    .directive('ionCurrentLocation', ionCurrentLocation);

    function ionCurrentLocation() {
        return {
            require: '?ngModel',
            restrict: 'E',
            scope: {
                ngModel: '=?'
            },
            link: link
        }

        function link(scope, element, attrs, ngModel) {
            console.log('ionCurrentLocation');
            console.log(ngModel);
        }
    }