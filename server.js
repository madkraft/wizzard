var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');


//Configure app to use bodyParser();
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;


//Routes for the API
var router = express.Router();
router.use(function (req, res, next) {
    console.log('Got request');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

router.get('/', function (req, res) {
    res.json({message: 'It worked!'});
});

// app.get('/', function(req, res){
//     console.log('', res.sendFile);
//     // res.sendFile(__dirname + 'index.html');
// });

//Custom URL e.g. localhost:1337/api/ECHO
// router.route('/:echo').get(function (req, res) {
//     res.json({echo: req.params.echo});
// });


var ipSteps = [
    {
        id: 0,
        title: 'Add camera',
        description: 'Provide basic parameters of new camera. Select type of new camera: IP or analog camera.',
        fields: [
            {
                title: 'Camera name',
                inputType: 'text',
                value: '',
                required: true
            }, {
                title: 'Camera description',
                inputType: 'text',
                value: ''
            }, {
                title: 'Camera inventory number',
                inputType: 'text',
                value: ''
            }, {
                title: 'IP address',
                inputType: 'text',
                value: '',
                required: true
            }, {
                title: 'IP port',
                inputType: 'text',
                value: '',
                required: true
            }
        ]
    },{
        id: 1,
        title: 'Add IP Camera: type selection',
        description: 'Select type of IP camera (vendor or model name). Select model ended with PTZ word in order to add PTZ camera of selected type.'
        // fields: [
        //     {
        //         id: 'camType',
        //         title: 'Camera type',
        //         required: true,
        //         inputType: 'select',
        //         value: 'Normal',
        //         choices: ['RTSP', 'Desktop Streamer', 'Normal', 'PTZ']
        //     }, {
        //         title: 'Use device settings',
        //         inputType: 'checkbox',
        //         value: true
        //     }
        // ]
    },{
        id: 2,
        title: 'Video streams specification',
        description: 'Define, how many encoding channels (streams) will be provided by this device. If device settings are not used, specify encoding parameters.'
        // fields: [
        //     {
        //         title: 'Table 1',
        //         inputType: 'text'
        //     },
        //     {
        //         title: 'Table 2 RTSP',
        //         inputType: 'text'
        //     }
        // ]
    },{
        id: 3,
        title: 'Device proxy selection',
        description: 'Select Video System Proxy node responsible to control this device'
        // fields: [
        //     {
        //         title: 'Device proxy',
        //         required: true,
        //         inputType: 'select',
        //         value: 'AD_host',
        //         choices: ['AD_host', 'Aulu', 'cokolwiek', 'test']
        //     }, {
        //         title: 'Telemetry controller',
        //         required: true,
        //         inputType: 'select',
        //         value: 'telemetry_a',
        //         choices: ['telemetry_a', 'telemetry_b', 'telemetry_c', 'telemetry_d']
        //     }, {
        //         title: 'User name',
        //         inputType: 'text',
        //         value: '',
        //         required: true
        //     }, {
        //         title: 'Password',
        //         inputType: 'password',
        //         value: ''
        //     }
        // ]
    }
]

var ipStep0 = {
    id: 0,
    title: 'Add camera',
    description: 'Provide basic parameters of new camera. Select type of new camera: IP or analog camera.',
    fields: [
        {
            title: 'Camera name',
            inputType: 'text',
            value: '',
            required: true
        }, {
            title: 'Camera description',
            inputType: 'text',
            value: ''
        }, {
            title: 'Camera inventory number',
            inputType: 'text',
            value: ''
        }, {
            title: 'IP address',
            inputType: 'text',
            value: '',
            required: true
        }, {
            title: 'IP port',
            inputType: 'text',
            value: '',
            required: true
        }
    ]
}


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

var ipStep2 = {
    id: 2,
    title: 'Video streams specification',
    description: 'Define, how many encoding channels (streams) will be provided by this device. If device settings are not used, specify encoding parameters.',
    fields: [
        {
            title: 'Table 1',
            inputType: 'text'
        },
        {
            title: 'Table 2 RTSP',
            inputType: 'text'
        }
    ]
}



// Step 1
router.route('/ip/0').get(function (req, res) {
    res.json(ipStep0);
});
// Step 2
router.route('/ip/1').get(function (req, res) {
    res.json(ipStep1);
});
// Step 3
router.route('/ip/2').get(function (req, res) {
    res.json(ipStep2);
});







router.route('/analog').get(function (req, res) {
    res.json(addCamera);
});
router.route('/tx').get(function (req, res) {
    res.json(addCamera);
});
router.route('/onvif').get(function (req, res) {
    res.json(addCamera);
});


//All routes will be prefixed with /api
app.use('/api', router);

//Start the server
app.listen(port);
console.log('API server has been started on port ' + port + '...');
console.log('http://localhost:3000/api');