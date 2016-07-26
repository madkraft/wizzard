(function (app) {

    'use strict';

    app.controller('MainController', MainController);

    function MainController() {
        var ctrl = this;


        var cameraClasses = [
            {id: 0, name: 'ip'},
            {id: 1, name: 'analog'},
            {id: 2, name: 'tx'}
        ];

        ctrl.form = {
            cameraClass: cameraClasses[0].id,
            cameraName: '',
            cameraDescr: '',
            cameraInvNum: '',
            cameraType: '',
            ipAddress: ''
        }

        ctrl.cameraTypes = _getCameraTypes();
        ctrl.submit = submit;

        ctrl.test = _test;

        function _test() {
            return ctrl.form.ipAddress;
        }


        function _getCameraTypes() {
            if (ctrl.form.cameraClass === 0) {
                return [
                    "Arecont",
                    "Axis",
                    "Onvif",
                    "Pelco",
                    "Sanyo",
                    "Sentry"
                ];
            } else {
                return [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F"
                ];
            }
        }




        function submit() {
            if (_isValid()) {
                console.log('Posting: ', ctrl.form);
            } else {
                return;
            }

        }

        function _isValid() {
            return true;
        }


    }


}(angular.module('app')));
