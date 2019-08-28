const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const medicalRequestRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("Connection to MongoDB Successful");
})

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
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


medicalRequestRoutes.route('/medical-requests').get(function(req, res) {
    MedicalRequest.find(function(err, medical_request) {
        if (err) {
            console.log(err);
        } else {
            res.json(medical_request);
        }
    });
});

medicalRequestRoutes.route('/medical-requests/:id').get(function(req, res) {
    let id = req.params.id;
    MedicalRequest.findById(id, function(err, medical_request) {
        res.json(medical_request);
    });
});

medicalRequestRoutes.route('/medical-requests-create').post(function(req, res) {
    let medicalrequest = new MedicalRequest(req.body);
    medicalrequest.save()
        .then(medicalrequest => {
            res.status(200).json({'medical_request': 'medical_request added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new medical_request failed');
        });
});

medicalRequestRoutes.route('/medical-requests-update/:id').post(function(req, res) {
    MedicalRequest.findById(req.params.id, function(err, todo) {
        if (!medical_request)
            res.status(404).send('data is not found');
        else
            medical_requests.medical_requests_description = req.body.medical_request_description;
            medical_requests.medical_request_sresponsible = req.body.medical_request_responsible;
            medical_requests.medical_request_psriority = req.body.medical_request_priority;
            medical_requests.medical_request_cosmpleted = req.body.medical_request_completed;
            medical_requests.save().then(medical_requests => {
                res.json('Medical Request updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/medical-requests', medicalRequestRoutes);


//===================================================================================================================================================================================
//===================================================================================================================================================================================
//===================================================================================================================================================================================
//===================================================================================================================================================================================
//===================================================================================================================================================================================
//===================================================================================================================================================================================

app.listen(PORT, function () {
    console.log("Server is running on Port:" + PORT);
});