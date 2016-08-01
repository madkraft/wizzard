(function (app) {

    'use strict';

    // app.directive('appendNext', appendNext);
    // app.directive('stepElement', stepElement);




    // appendNext.$inject = ['$compile'];
    // function appendNext($compile) {
    //     return {
    //         restrict: 'A',
    //         link: link,
    //         scope: {}
    //     };

    //     function link(scope, el, attrs) {
    //         var firstElement = angular.element('.panel-body-container'),
    //             elementToAdd = angular.element('<step-element></step-element>'),
    //             compliledElement = $compile(elementToAdd)(scope);

    //         el.on('click', function () {
    //             firstElement.append(compliledElement);
    //         });
    //     }
    // }



    // function stepElement() {
    //     return {
    //         link: link,
    //         templateUrl: './src/templates/step-element.html'
    //     };

    //     function link(scope, el, attrs) {
    //         console.log('', scope);
    //         // scope.title = 'LOL title';
    //         // scope.id = scope.ctrl.step;
    //     }
    // }




}(angular.module('app')));
