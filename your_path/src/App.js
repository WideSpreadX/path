import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/Todos-list.component";


function App() {
  return (
    <Router>
      <div className="container">
        <div>
          <nav>
            <ul>
              <li><Link className="jonnyo" to="/" />All Requests</li>
              <li><Link className="jonnyo" to="/create" />New Request</li>
              <li><Link className="jonnyo" to="/edit/:id" />Edit Request</li>
            </ul>
          </nav>
        </div>


        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
