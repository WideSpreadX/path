/* const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const medicalRequestRoutes = express.Router();
const PORT = 4001;


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/medical_requests', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("Connection to Medical Request DB Successful");
})


let MedicalRequest = require('./medical-request.model');


medicalRequestRoutes.route('/medical-requests').get(function(req, res) {
    MedicalRequest.find(function(err, medical_requests) {
        if (err) {
            console.log(err);
        } else {
            res.json(medical_requests);
        }
    });
});

medicalRequestRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    MedicalRequest.findById(id, function(err, medical_request) {
        res.json(medical_request);
    });
});

medicalRequestRoutes.route('/medical_request/').post(function(req, res) {
    let medical_request = new MedicalRequest(req.body);
    medical_request.save()
        .then(medical_request => {
            res.status(200).json({'medical_requests': 'medical_request added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new medical_request failed');
        });
});

medicalRequestRoutes.route('/medical-request-update/:id').post(function(req, res) {
    MedicalRequest.findById(req.params.id, function(err, todo) {
        if (!medical_request)
            res.status(404).send('data is not found');
        else
            medical_request.medical_request_description = req.body.medical_request_description;
            medical_request.medical_request_responsible = req.body.medical_request_responsible;
            medical_request.medical_request_priority = req.body.medical_request_priority;
            medical_request.medical_request_completed = req.body.medical_request_completed;
            medical_request.save().then(medical_request => {
                res.json('Medical Request updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/medical-requests', medicalRequestRoutes); */