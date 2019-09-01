const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const medicalRequestRoutes = express.Router();
const counselorRequestRoutes = express.Router();
const lawyerRequestRoutes = express.Router();
const PORT = process.env.PORT || 4000;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());
//heroku_25q3k83c:gpf46trvu55u846vqmaeto4ojv@ds123698.mlab.com:23698/heroku_25q3k83c
mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("Connection to MongoDB Successful");
})

todoRoutes.route('/').get(function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function (req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'todo added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/update/:id').post(function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else
            todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;
        todo.save().then(todo => {
            res.json('Todo updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/todos', todoRoutes);

//=======================================================================MEDICAL REQUESTS============================================================================================================

let MedicalRequest = require('./medical-request.model');


medicalRequestRoutes.route('/medical-requests').get(function (req, res) {
    MedicalRequest.find(function (err, medical_requests) {
        if (err) {
            console.log(err);
        } else {
            res.json(medical_requests);
        }
    });
});

medicalRequestRoutes.route('/medical-requests/:id').get(function (req, res) {
    let id = req.params.id;
    MedicalRequest.findById(id, function (err, medical_request) {
        res.json(medical_request);
    });
});

medicalRequestRoutes.route('/medical-requests-create').post(function (req, res) {
    let medicalrequest = new MedicalRequest(req.body);
    medicalrequest.save()
        .then(medicalrequest => {
            res.status(200).json({ 'medical_request': 'medical_request added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new medical_request failed');
        });
});

medicalRequestRoutes.route('/medical-requests-update/:id').post(function (req, res) {
    MedicalRequest.findById(req.params.id, function (err, medical_request) {
        if (!medical_request)
            res.status(404).send('data is not found');
        else
            medical_requests.medical_requests_description = req.body.medical_request_description;
        medical_requests.medical_request_responsible = req.body.medical_request_responsible;
        medical_requests.medical_request_priority = req.body.medical_request_priority;
        medical_requests.medical_request_completed = req.body.medical_request_completed;
        medical_requests.save().then(medical_requests => {
            res.json('Medical Request updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/medical-requests', medicalRequestRoutes);


//=================================================Counselor Requests==================================================================================================================================
let CounselorRequest = require('./counselor-request.model');


counselorRequestRoutes.route('/counselor-requests').get(function (req, res) {
    CounselorRequest.find(function (err, counselor_request) {
        if (err) {
            console.log(err);
        } else {
            res.json(counselor_request);
        }
    });
});

counselorRequestRoutes.route('/counselor-requests/:id').get(function (req, res) {
    let id = req.params.id;
    CounselorRequest.findById(id, function (err, counselor_request) {
        res.json(counselor_request);
    });
});

counselorRequestRoutes.route('/counselor-requests-create').post(function (req, res) {
    let counselorrequest = new CounselorRequest(req.body);
    counselorrequest.save()
        .then(counselorrequest => {
            res.status(200).json({ 'counselor_request': 'counselor_request added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new counselor_request failed');
        });
});

counselorRequestRoutes.route('/counselor-requests-update/:id').post(function (req, res) {
    CounselorRequest.findById(req.params.id, function (err, counselor_request) {
        if (!counselor_request)
            res.status(404).send('data is not found');
        else
            counselor_requests.counselor_request_description = req.body.counselor_request_description;
        counselor_requests.counselor_request_sresponsible = req.body.counselor_request_responsible;
        counselor_requests.counselor_request_psriority = req.body.counselor_request_priority;
        counselor_requests.counselor_request_cosmpleted = req.body.counselor_request_completed;
        counselor_requests.save().then(counselor_request => {
            res.json('Counselor Request updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/counselor-requests', counselorRequestRoutes);


//====================================================Lawyer Requests===============================================================================================================================
let LawyerRequest = require('./lawyer-request.model');


lawyerRequestRoutes.route('/lawyer-requests').get(function (req, res) {
    LawyerRequest.find(function (err, lawyer_request) {
        if (err) {
            console.log(err);
        } else {
            res.json(lawyer_request);
        }
    });
});

lawyerRequestRoutes.route('/lawyer-requests/:id').get(function (req, res) {
    let id = req.params.id;
    LawyerRequest.findById(id, function (err, lawyer_request) {
        res.json(lawyer_request);
    });
});

lawyerRequestRoutes.route('/lawyer-requests-create').post(function (req, res) {
    let lawyerrequest = new LawyerRequest(req.body);
    lawyerrequest.save()
        .then(lawyerrequest => {
            res.status(200).json({ 'lawyer_request': 'counselor_request added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new lawyer_request failed');
        });
});

lawyerRequestRoutes.route('/lawyer-requests-update/:id').post(function (req, res) {
    LawyerRequest.findById(req.params.id, function (err, lawyer_request) {
        if (!lawyer_request)
            res.status(404).send('data is not found');
        else
            lawyer_requests.counselor_request_description = req.body.lawyer_request_description;
        lawyer_requests.lawyer_request_responsible = req.body.lawyer_request_responsible;
        lawyer_requests.lawyer_request_priority = req.body.lawyer_request_priority;
        lawyer_requests.lawyer_request_completed = req.body.lawyer_request_completed;
        lawyer_requests.save().then(lawyer_request => {
            res.json('Lawyer Request updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/lawyer-requests', lawyerRequestRoutes);
//===================================================================================================================================================================================
//===================================================================================================================================================================================
//===================================================================================================================================================================================
//===================================================================================================================================================================================

app.listen(PORT, function () {
    console.log("Server is running on Port:" + PORT);
});