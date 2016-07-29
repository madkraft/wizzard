(function (app) {

    'use strict';

    app.directive('enableNavButton', enableNavButton);



    function enableNavButton() {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, el, attrs) {
            var buttons = angular.element('.btn-nav');
            buttons[scope.ctrl.step].removeAttribute('disabled');

            el.on('click', function () {


                if (scope.ctrl.isValid()) {
                    buttons[scope.ctrl.step].removeAttribute('disabled');
                    buttons[scope.ctrl.step - 1].classList.add('class', 'btn-success');
                    buttons[scope.ctrl.step - 1].innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
                } else {
                    console.log('invalid');
                }
            });

        }
    }




}(angular.module('app')));
