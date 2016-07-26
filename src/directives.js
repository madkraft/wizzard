(function (app) {

    'use strict';

    app.directive('toggleActive', toggleActive);


    function toggleActive() {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, el, attrs) {


            var toggleState = function(elem, one, two){
                var steps = el.parent().children();
                for (var i = 0; i < steps.length; i++) {
                    steps[i].setAttribute('data-state', 'normal');
                }

                var currentAttr = elem.getAttribute("data-state");
                elem.setAttribute(
                    'data-state',
                    currentAttr === one ?  two : one
                );
            };

            el.on('click', toggleState.bind(null, el[0], 'active', 'normal'));

        }
    }




}(angular.module('app')));