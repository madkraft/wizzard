(function (app) {

    'use strict';

    app.controller('MainController', MainController);

    MainController.$inject = ['formDataService'];
    function MainController(FormDataService) {
        var ctrl = this;

        var ipStep1 = {
            id: 1,
            title: 'Add IP Camera: type selection',
            description: 'Select type of IP camera (vendor or model name). Select model ended with PTZ word in order to add PTZ camera of selected type.',
            fields: [
                {
                    id: 'camType',
                    title: 'Camera type',
                    required: true,
                    inputType: 'select',
                    value: 'Normal',
                    choices: ['RTSP', 'Desktop Streamer', 'Normal', 'PTZ']
                }, {
                    title: 'Use device settings',
                    inputType: 'checkbox',
                    value: true
                }
            ]
        }

        ctrl.choices = [{id: 'step1', value: ''}];

        ctrl.addNewChoice = function() {
            var newItemNo = ctrl.choices.length+1;
            ctrl.choices.push({'id':'step'+newItemNo});
        };


    }


}(angular.module('app')));
