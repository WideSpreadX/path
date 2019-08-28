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


function App() {
  return (
    <Router>
      <div className="request-card">
        <div>
          <nav>
            <ul>
              <li><Link className="jonnyo" to="/" />My Todo List:</li>
              <li><Link className="jonnyo" to="/create" />Add a Todo Item</li>
              <li><Link className="jonnyo" to="/edit/:id" />Edit Todo</li>
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
              <li><Link className="jonnyomg" to="/medical-requests" />All Medical Requests</li>
              <li><Link className="jonnyomg" to="/medical-requests-create" />New Medical Request</li>
              <li><Link className="jonnyomg" to="/medical-requests/edit/:id" />Edit Medical Request</li>
            </ul>
          </nav>
        </div>
        <Route path="/medical-requests" exact component={MedicalRequestsList} />
        {/* <Route path="/medical-requests-edit/:id" component={EditMedicalRequest} /> */}
        <Route path="/medical-requests-create" component={CreateMedicalRequest} />


      </div>
    </Router>
  );
}

export default App;
