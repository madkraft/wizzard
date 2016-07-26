var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');


//Configure app to use bodyParser();
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


//Routes for the API
var router = express.Router();
router.use(function (req, res, next) {
    console.log('Got request');
    next();
});

router.get('/', function (req, res) {
    res.json({message: 'It worked!'});
});


//Custom URL e.g. localhost:1337/api/ECHO
// router.route('/:echo').get(function (req, res) {
//     res.json({echo: req.params.echo});
// });


var ip = [
    {
        step: 0,
        title: 'Add camera',
        description: 'Provide basic parameters of new camera. Select type of new camera: IP or analog camera.',
        fields: [
            {title: 'Camera name', required: true},
            {title: 'Camera description'},
            {title: 'Camera inventory number'}
        ]
    },{
        step: 1,
        title: 'Add IP Camera: type selection',
        description: 'Select type of IP camera (vendor or model name). Select model ended with PTZ word in order to add PTZ camera of selected type.',
        fields: [
            {
                title: 'Camera type',
                required: true,
                types: ['Arecont', 'Axis', 'Onvif', 'Pelco', 'Sanyo', 'Sentry']
            }
        ]
    },{
        step: 2,
        title: 'Add IP camera: connection parameters',
        description: 'Specify IP address and port of the camera',
        fields: [
            {title: 'IP address', required: true},
            {title: 'IP port', required: true}
        ]
    },{
        step: 3,
        title: 'IP camera: access control',
        description: 'Specify user name and password required to access the IP camera in order to control it',
        fields: [
            {title: 'User name'},
            {title: 'Password'}
        ]
    },{
        step: 4,
        title: 'Use device settings',
        description: 'Specify if the system will read encoding parameters, such as encoding type, frame rate or resolution, from the encoding device or they will be specified in system configuration',
        fields: [
            {title: 'Use device settings', checked: true}
        ]
    },{
        step: 5,
        title: 'Video streams specification',
        description: 'Define, how many encoding channels (streams) will be provided by this device. If device settings are not used, specify encoding parameters.'
    },{
        step: 6,
        title: 'Device proxy selection',
        description: 'Select Video System Proxy node responsible to control this device',
        fields: [
            {
                title: 'Device proxy',
                required: true,
                proxies: ['AD_host', 'Aulu', 'cokolwiek', 'test']
            }
        ]
    },
]


// Step 1
router.route('/ip').get(function (req, res) {
    res.json(ip);
});
router.route('/ip').get(function (req, res) {
    res.json(addCamera);
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
console.log('http://localhost:8080/api');