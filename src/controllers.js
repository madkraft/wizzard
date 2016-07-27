(function (app) {

    'use strict';

    app.controller('MainController', MainController);

    MainController.$inject = ['formData'];
    function MainController(formData) {
        var ctrl = this;

        var steps = ['one', 'two'];
        ctrl.currentStep = 'one';

        // var isCurrentStep = function () {
        //     return
        // };

        ctrl.setCurrentStep = function (val) {
            ctrl.currentStep = val;
        };

        var cameraClasses = [
            {id: 0, name: 'ip'},
            {id: 1, name: 'analog'},
            {id: 2, name: 'tx'}
        ];

        ctrl.deviceProxies = [
            "AD_HOST (Proxy)",
            "AuLu_Host (Proxy)",
            "cokolwiek (Proxy)",
            "host71 (Proxy)",
            "jw_host (Proxy)"
        ];

        ctrl.telemetryControllers = [
            "a(Telemetry)",
            "aa(Telemetry)",
            "AuLu_Host (Telemetry Controller)",
            "beee(Telemetry)",
            "dd (Telemetry Controller)"
        ];

        ctrl.form = {
            cameraClass: cameraClasses[0].id,
            cameraName: '',
            cameraDescr: '',
            cameraInvNum: '',
            cameraType: {},
            ipAddress: '',
            userName: '',
            password: '',
            useDeviceSettings: true,
            deviceProxy: '',
            telemetryController: ''
        };

        ctrl.cameraTypes = _getCameraTypes();
        ctrl.submit = submit;

        ctrl.test = test;
        ctrl.isPTZ = isPTZ;
        ctrl.isDesktopStreamer = isDesktopStreamer;
        ctrl.isRstp = isRstp;

        function test() {
            return ctrl.form.ipAddress;
        }

        function isPTZ() {
            return ctrl.form.cameraType.value === 2 ? true : false
        }

        function isDesktopStreamer() {
            return ctrl.form.cameraType.value === 3 ? true : false
        }

        function isRstp() {
            console.log('hello');
            return ctrl.form.cameraType.value === 4 ? true : false
        }


        formData.getData().then(function (data) {
            console.log('', data);
        });



        function _getCameraTypes() {
            if (ctrl.form.cameraClass === 0) {
                return [
                    {display: "Normal", value: 1},
                    {display: "PTZ", value: 2},
                    {display: "Desktop stremer", value: 3},
                    {display: "RTSP specification", value: 4}
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
