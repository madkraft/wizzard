var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var _ = require('lodash');

//Configure app to use bodyParser();
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;


//Routes for the API
var router = express.Router();
router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

router.get('/', function (req, res) {
    res.json({message: 'It worked!'});
});




// router.all('/ip/:section', function (req, res, next) {


//     // if (req.params.section === 1) {
//     //     console.log('', req.query[0]);
//     // }

//     // var url_parts = url.parse(req.url, true);
//     // var query = url_parts.query;

//


//     // console.log('', req.params.section);
//     // console.log('', req.params.data);
//     // console.log('', sections[req.params.section]);

//     res.json(sections[req.params.section]);
// });





// router.get('/ip/:section', function (req, res) {
//     console.log('Got request');
//     // console.log('query', req.query);

//     var currSection = sections[req.params.section]

//     var x = _.filter(currSection.fields, function (field) {
//         return (_.findIndex(field.depends, function (item) {
//             return item === req.query.camType;
//         })) >= 0;
//     });

//     currSection.fields = x;



//     if (req.query.camType) {
//         console.log('sending checkbox');
//         // res.json(sections[req.params.section]);
//     } else {
//         console.log('sending no checkbox');
//     }

//     res.json(currSection);
// });



router.route('/ip/0').get(function (req, res) {
    var response = {
        title: 'Add camera',
        description: 'Provide basic parameters of new camera. Select type of new camera: IP or analog camera.',
        fields: [
            {
                label: 'Camera name',
                name: 'camName',
                inputType: 'text',
                value: '',
                required: true
            }, {
                label: 'Camera description',
                name: 'camDesc',
                inputType: 'text',
                value: ''
            }, {
                label: 'Camera inventory number',
                name: 'camInvNum',
                inputType: 'text',
                value: ''
            }, {
                label: 'IP address',
                name: 'ipAddress',
                inputType: 'text',
                value: '',
                required: true
            }, {
                label: 'IP port',
                name: 'ipPort',
                inputType: 'text',
                value: '',
                required: true
            }
        ]
    };

    res.json(response);
});



router.route('/ip/1').get(function (req, res) {

    var response = {
        title: 'Add IP Camera: type selection',
        description: 'Select type of IP camera (vendor or model name). Select model ended with PTZ word in order to add PTZ camera of selected type.',
        fields: [
            {
                label: 'Camera type',
                name: 'camType',
                required: true,
                inputType: 'select',
                value: 'Normal',
                choices: ['RTSP', 'Desktop Streamer', 'Normal', 'PTZ']
            }
        ]
    };

    res.json(response);
});


router.route('/ip/2').get(function (req, res) {
    var response = {
        title: 'Add IP Camera: use device settings',
        description: 'Select type of IP camera (vendor or model name).',
        fields: [
            {
                label: 'Use device settings',
                name: 'useSettings',
                inputType: 'checkbox',
                value: true,
                depends: ['Normal', 'PTZ'],
            }
        ]
    };
    res.json(response);
});
router.route('/ip/3').get(function (req, res) {
    var response = {
        title: 'Video streams specification',
        description: 'Define, how many encoding channels (streams) will be provided by this device. If device settings are not used, specify encoding parameters.',
        fields: [
            {
                label: 'Table 1',
                name: 'table1',
                inputType: 'text',
                depends: ['Normal', 'PTZ']
            },
            {
                label: 'Table 2 RTSP',
                name: 'table2',
                inputType: 'text',
                depends: ['RTSP']
            }
        ]
    };

    res.json(response);
});
router.route('/ip/4').get(function (req, res) {
    var response =
    res.json(response);
});



//All routes will be prefixed with /api
app.use('/api', router);

//Start the server
app.listen(port);
console.log('API server has been started on port ' + port + '...');
console.log('http://localhost:' + port + '/api');














// var ipSteps = [
//     {
//         id: 0,
//         title: 'Add camera',
//         description: 'Provide basic parameters of new camera. Select type of new camera: IP or analog camera.',
//         fields: [
//             {
//                 title: 'Camera name',
//                 inputType: 'text',
//                 value: '',
//                 required: true
//             }, {
//                 title: 'Camera description',
//                 inputType: 'text',
//                 value: ''
//             }, {
//                 title: 'Camera inventory number',
//                 inputType: 'text',
//                 value: ''
//             }, {
//                 title: 'IP address',
//                 inputType: 'text',
//                 value: '',
//                 required: true
//             }, {
//                 title: 'IP port',
//                 inputType: 'text',
//                 value: '',
//                 required: true
//             }
//         ]
//     },{
//         id: 1,
//         title: 'Add IP Camera: type selection',
//         description: 'Select type of IP camera (vendor or model name). Select model ended with PTZ word in order to add PTZ camera of selected type.'
//         // fields: [
//         //     {
//         //         id: 'camType',
//         //         title: 'Camera type',
//         //         required: true,
//         //         inputType: 'select',
//         //         value: 'Normal',
//         //         choices: ['RTSP', 'Desktop Streamer', 'Normal', 'PTZ']
//         //     }, {
//         //         title: 'Use device settings',
//         //         inputType: 'checkbox',
//         //         value: true
//         //     }
//         // ]
//     },{
//         id: 2,
//         title: 'Video streams specification',
//         description: 'Define, how many encoding channels (streams) will be provided by this device. If device settings are not used, specify encoding parameters.'
//         // fields: [
//         //     {
//         //         title: 'Table 1',
//         //         inputType: 'text'
//         //     },
//         //     {
//         //         title: 'Table 2 RTSP',
//         //         inputType: 'text'
//         //     }
//         // ]
//     },{
//         id: 3,
//         title: 'Device proxy selection',
//         description: 'Select Video System Proxy node responsible to control this device'
//         // fields: [
//         //     {
//         //         title: 'Device proxy',
//         //         required: true,
//         //         inputType: 'select',
//         //         value: 'AD_host',
//         //         choices: ['AD_host', 'Aulu', 'cokolwiek', 'test']
//         //     }, {
//         //         title: 'Telemetry controller',
//         //         required: true,
//         //         inputType: 'select',
//         //         value: 'telemetry_a',
//         //         choices: ['telemetry_a', 'telemetry_b', 'telemetry_c', 'telemetry_d']
//         //     }, {
//         //         title: 'User name',
//         //         inputType: 'text',
//         //         value: '',
//         //         required: true
//         //     }, {
//         //         title: 'Password',
//         //         inputType: 'password',
//         //         value: ''
//         //     }
//         // ]
//     }
// ]
