import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }
    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        //Insert onSubmit Logic Here
        console.log(`Form submitted`);
        console.log(`Todo Description: ${this.state.todo_description}`)
        console.log(`Todo Responsibility: ${this.state.todo_responsible}`)
        console.log(`Todo Priority: ${this.state.todo_priority}`)
        console.log(`Todo Completed: ${this.state.todo_completed}`)

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('heroku_25q3k83c:gpf46trvu55u846vqmaeto4ojv@ds123698.mlab.com:23698/heroku_25q3k83c/counselor-requests/counselor-requests-create/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });

    }

    render() {
        return (
            <div style={{ marginTop: 30 }}>
                <h3>Create A New Request</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Descrption: </label>
                        <input type="text" className="form-control" value={this.state.todo_description} onChange={this.onChangeTodoDescription} />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text" className="form-control" value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible} />
                    </div>
                    <div className="form-group">
                        <label>Priority: </label>
                        <div>
                            <label>Low</label>
                            <input type="radio" id="priorityLow" value="Low" checked={this.state.todo_priority === 'Low'}
                                onChange={this.onChangeTodoPriority} />
                        </div>
                        <div>
                            <label>Medium</label>
                            <input type="radio" id="priorityMedium" value="Medium" checked={this.state.todo_priority === 'Medium'}
                                onChange={this.onChangeTodoPriority} />
                        </div>
                        <div>
                            <label>High</label>
                            <input type="radio" id="priorityHigh" value="High" checked={this.state.todo_priority === 'High'}
                                onChange={this.onChangeTodoPriority} />
                        </div>
                        <div>
                            <input type="submit" value="Create Todo" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}