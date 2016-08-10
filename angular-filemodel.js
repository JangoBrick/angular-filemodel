/*global angular */

(function (angular) {

    // -- MODULE DECLARATION
    angular.module("ngFilemodel", [])

    // DIRECTIVE
    .directive("ngFilemodel", [function () {
        return {

            restrict: "A",
            require: "ngModel",

            link: function (scope, element, attrs, ngModelCtrl) {

                // file select -> model
                element.bind("change", function (event) {
                    ngModelCtrl.$setViewValue(event.target.files);
                });

                // model -> file select
                ngModelCtrl.$render = function () {
                    if (!ngModelCtrl.$viewValue) {
                        element.val(null);
                    }
                };

            }

        };
    }]);

})(angular);
