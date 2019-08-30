import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/Todos-list.component";
//--------------------Medical Requests---------------------------------
import CreateMedicalRequest from "./components/create-medical-request.component";
import EditMedicalRequest from "./components/edit-medical-request.component";
import MedicalRequestsList from "./components/Medical-request-list.component";
//--------------------Counselor Requests---------------------------------
import CreateCounselorRequest from "./components/create-counselor-request.component";
import CounselorRequestList from "./components/Counselor-request-list.component";

//--------------------Lawyer Requests---------------------------------
import CreateLawyerRequest from './components/create-lawyer-request.component';
import LawyerRequestList from './components/Lawyer-request-list.component';


function App() {
  return (
    <Router>
      <div className="request-card">
        <div>
          <nav>
            <ul>
              <li><Link className="jonnyo" to="/" >My Todo List</Link></li>
              <li><Link className="jonnyo" to="/create">Add a Todo Item </Link></li>
              <li><Link className="jonnyo" to="/edit/:id">Edit Todo</Link></li>
            </ul>
          </nav>
        </div>


        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
      <div className="request-card">
        <div>
          <nav>
            <ul>
              <li><Link className="jonnyomg" to="/medical-requests">All Medical Requests</Link></li>
              <li><Link className="jonnyomg" to="/medical-requests-create">New Medical Request</Link></li>
              <li><Link className="jonnyomg" to="/medical-requests/edit/:id">Edit Medical Request</Link></li>
            </ul>
          </nav>
        </div>
        <Route path="/medical-requests" exact component={MedicalRequestsList} />
        {/* <Route path="/medical-requests-edit/:id" component={EditMedicalRequest} /> */}
        <Route path="/medical-requests-create" component={CreateMedicalRequest} />
        <div className="request-card">
          <div>
            <nav>
              <ul>
                <li><Link className="jonnyomg-counselor" to="/counselor-requests">All Counselor Requests</Link></li>
                <li><Link className="jonnyomg-counselor" to="/counselor-requests-create">New Counselor Request</Link></li>
                <li><Link className="jonnyomg-counselor" to="/counselor-requests-edit/:id">Edit Counselor Request</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <Route path="/counselor-requests" exact component={CounselorRequestList} />
        <Route path="/counselor-requests-create" component={CreateCounselorRequest} />
      </div>
      <div className="request-card">
        <div>
          <nav>
            <ul>
              <li><Link className="jonnyomg-lawyer" to="/lawyer-requests-list">All Lawyer Requests</Link></li>
              <li><Link className="jonnyomg-lawyer" to="/lawyer-requests-create">New Lawyer Request</Link></li>
              <li><Link className="jonnyomg-lawyer" to="/lawyer-requests-edit/:id">Edit Lawyer Request</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <Route path="/lawyer-requests" exact component={LawyerRequestList} />
      <Route path="/lawyer-requests-create" component={CreateLawyerRequest} />
    </Router>
  );
}

export default App;
