(function (app) {

    'use strict';

    app.controller('MainController', MainController);

    function MainController() {
        var ctrl = this;

        ctrl.steps = ['one', 'two', 'three'];
        ctrl.step = 0;
        ctrl.wizard = {camera: 2};

        ctrl.isCurrentStep = isCurrentStep;
        ctrl.isFirstStep = isFirstStep;
        ctrl.isLastStep = isLastStep;
        ctrl.getCurrentStep = getCurrentStep;
        ctrl.setCurrentStep = setCurrentStep;
        ctrl.handlePrevious = handlePrevious;
        ctrl.handleNext = handleNext;
        ctrl.handleCancel = handleCancel;
        ctrl.getNextLabel = getNextLabel;



        function getCurrentStep() {
            return ctrl.steps[ctrl.step];
        }


        function handlePrevious() {
            ctrl.step -= ctrl.isFirstStep() ? 0 : 1;
        };


        function handleNext() {
            if (ctrl.isLastStep()) {
                console.log('submit and change url');
            } else {
                ctrl.step += 1;
            }
        };


        function handleCancel() {
            console.log('cancel');
        };


        function setCurrentStep(step) {
            ctrl.step = step;
        }

        function isFirstStep() {
            return ctrl.step === 0;
        }

        function isLastStep() {
            return ctrl.step === (ctrl.steps.length-1);
        }

        function isCurrentStep(step) {
            return ctrl.step === step;
        }

        function getNextLabel() {
            return ctrl.isLastStep() ? 'Submit' : 'Next';
        }

    }


}(angular.module('app')));