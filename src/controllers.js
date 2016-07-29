(function (app) {

    'use strict';

    app.controller('MainController', MainController);

    MainController.$inject = ['$scope', 'formDataService'];
    function MainController($scope, FormDataService) {
        var ctrl = this;

        var allData = [];
        ctrl.finalResult = [];
        ctrl.steps = [];
        ctrl.step = 0;
        ctrl.stepData = {};

        ctrl.summary = [];

        // $scope.$watch('ctrl.step', function () {
        //     console.log('changed');
        // })



        ctrl.isLastStep = isLastStep;
        ctrl.isCurrentStep = isCurrentStep;
        ctrl.setCurrentStep = setCurrentStep;
        ctrl.getCurrentStep = getCurrentStep;
        ctrl.isFirstStep = isFirstStep;
        ctrl.getNextLabel = getNextLabel;
        ctrl.handlePrevious = handlePrevious;
        ctrl.handleNext = handleNext;
        ctrl.isValid = isValid;


        FormDataService.getData().then(function (data) {
            allData = data;

            ctrl.steps = data.map(function (step) {
                return step.id;
            })

            ctrl.steps.push(ctrl.steps.length);


        });




        function isCurrentStep(step) {
            return ctrl.step === step;
        };

        function setCurrentStep(step) {
            ctrl.step = step;
        };

        function getCurrentStep() {
            ctrl.stepData = allData[ctrl.step];
            return ctrl.steps[ctrl.step];
        };

        function isFirstStep() {
            return ctrl.step === 0;
        };

        function getNextLabel() {
            return (isLastStep()) ? 'Submit' : 'Next';
        };

        function handlePrevious() {
            ctrl.step -= (ctrl.isFirstStep()) ? 0 : 1;
        };

        function handleNext(data) {
            if (isLastStep()) {
                console.log('submit and close');
            } else {
                if (isValid()) {
                    _saveData(data); //////////////// Make it into service
                    ctrl.summary = getSummary();
                    ctrl.step += 1;
                } else {
                    return;
                }
            }
        };

        function _saveData(data) {
            if (_.indexOf(ctrl.finalResult, data) === -1) {
                ctrl.finalResult.push(data);
            }
            // console.log('', ctrl.finalResult);
        }

        function isLastStep() {
            return ctrl.step === (ctrl.steps.length - 1);
        };


        function getSummary() {
            var fields =  _.map(ctrl.finalResult, function (step) {
                return step.fields;
            });
            return _.flattenDeep(fields);
        };

        function isValid() {
            return true;
        }



        // var cameraClasses = [
        //     {id: 0, name: 'ip'},
        //     {id: 1, name: 'analog'},
        //     {id: 2, name: 'tx'}
        // ];

        // ctrl.deviceProxies = [
        //     "AD_HOST (Proxy)",
        //     "AuLu_Host (Proxy)",
        //     "cokolwiek (Proxy)",
        //     "host71 (Proxy)",
        //     "jw_host (Proxy)"
        // ];

        // ctrl.telemetryControllers = [
        //     "a(Telemetry)",
        //     "aa(Telemetry)",
        //     "AuLu_Host (Telemetry Controller)",
        //     "beee(Telemetry)",
        //     "dd (Telemetry Controller)"
        // ];

        // ctrl.form = {
        //     cameraClass: cameraClasses[0].id,
        //     cameraName: '',
        //     cameraDescr: '',
        //     cameraInvNum: '',
        //     cameraType: {},
        //     ipAddress: '',
        //     userName: '',
        //     password: '',
        //     useDeviceSettings: true,
        //     deviceProxy: '',
        //     telemetryController: ''
        // };

        // ctrl.cameraTypes = _getCameraTypes();
        // ctrl.submit = submit;

        // ctrl.test = test;
        // ctrl.isPTZ = isPTZ;
        // ctrl.isDesktopStreamer = isDesktopStreamer;
        // ctrl.isRstp = isRstp;

        // function test() {
        //     return ctrl.form.ipAddress;
        // }

        // function isPTZ() {
        //     return ctrl.form.cameraType.value === 2 ? true : false
        // }

        // function isDesktopStreamer() {
        //     return ctrl.form.cameraType.value === 3 ? true : false
        // }

        // function isRstp() {
        //     console.log('hello');
        //     return ctrl.form.cameraType.value === 4 ? true : false
        // }






        // function _getCameraTypes() {
        //     if (ctrl.form.cameraClass === 0) {
        //         return [
        //             {display: "Normal", value: 1},
        //             {display: "PTZ", value: 2},
        //             {display: "Desktop stremer", value: 3},
        //             {display: "RTSP specification", value: 4}
        //         ];
        //     } else {
        //         return [
        //             "A",
        //             "B",
        //             "C",
        //             "D",
        //             "E",
        //             "F"
        //         ];
        //     }
        // }




        // function submit() {
        //     if (_isValid()) {
        //         console.log('Posting: ', ctrl.form);
        //     } else {
        //         return;
        //     }

        // }

        // function _isValid() {
        //     return true;
        // }


    }


}(angular.module('app')));
