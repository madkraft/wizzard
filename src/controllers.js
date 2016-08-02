(function (app) {

    'use strict';

    app.controller('MainController', MainController);

    MainController.$inject = ['formDataService'];
    function MainController(FormDataService) {
        var ctrl = this;

        ctrl.step = 0;
        ctrl.params = {};

        // TODO
        // resolve this in route definition (ui-router)
        FormDataService.getData(ctrl.step, {id: 1}).then(function (data) {
            ctrl.sections = [data];
        });


        ctrl.showNextStep = function(step) {
            ctrl.step = step + 1;

            FormDataService.getData(ctrl.step, {params: result()}).then(function (data) {
                ctrl.sections.push(data);
            });

        };



        function result(step) {
            var result = {};

            var section = ctrl.sections.map(function (section) {
                return section.fields;
            });

            var fields = _.flattenDeep(section);

            _.forEach(fields, function (field) {
                result[field.name] = field.value;
            });

            return result;
        }





    }


}(angular.module('app')));
