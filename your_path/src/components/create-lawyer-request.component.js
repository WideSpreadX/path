import React, { Component } from 'react';
import axios from 'axios';

export default class CreateLawyerRequest extends Component {
    constructor(props) {
        super(props);

        this.onChangeLawyerRequestDescription = this.onChangeLawyerRequestDescription.bind(this);
        this.onChangeLawyerRequestResponsible = this.onChangeLawyerRequestResponsible.bind(this);
        this.onChangeLawyerRequestPriority = this.onChangeLawyerRequestPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            lawyer_request_description: '',
            lawyer_request_responsible: '',
            lawyer_request_priority: '',
            lawyer_request_completed: false
        }
    }

    onChangeLawyerRequestDescription(e) {
        this.setState({
            lawyer_request_description: e.target.value
        });
    }
    onChangeLawyerRequestResponsible(e) {
        this.setState({
            lawyer_request_responsible: e.target.value
        });
    }
    onChangeLawyerRequestPriority(e) {
        this.setState({
            lawyer_request_priority: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        //Insert onSubmit Logic Here
        console.log(`Form submitted`);
        console.log(`lawyer_request Description: ${this.state.lawyer_request_description}`)
        console.log(`lawyer_request Responsibility: ${this.state.lawyer_request_responsible}`)
        console.log(`lawyer_request Priority: ${this.state.lawyer_request_priority}`)
        console.log(`lawyer_request Completed: ${this.state.lawyer_request_completed}`)

        const newLawyerRequest = {
            lawyer_request_description: this.state.lawyer_request_description,
            lawyer_request_responsible: this.state.lawyer_request_responsible,
            lawyer_request_priority: this.state.lawyer_request_priority,
            lawyer_request_completed: this.state.lawyer_request_completed
        }

        axios.post('http://localhost:4000/lawyer-requests/lawyer-requests-create', newLawyerRequest)
            .then(res => console.log(res.data));

        this.setState({
            lawyer_request_description: '',
            lawyer_request_responsible: '',
            lawyer_request_priority: '',
            lawyer_request_completed: false
        });

    }

    render() {
        return (
            <div style={{ marginTop: 30 }}>
                <h3>Create A New Lawyer Request</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group reason">
                        <label>Reason for Request: </label>
                        <input type="text" className="form-control" value={this.state.lawyer_request_description} onChange={this.onChangeLawyerRequestDescription} />
                    </div>
                    <div className="form-group personel">
                        <label>Who do you need: </label>
                        <input type="text" className="form-control" value={this.state.lawyer_request_responsible} onChange={this.onChangeLawyerRequestResponsible} />
                    </div>
                    <div className="group">
                        <label>Priority: </label>
                        <div className="radio">
                            <label>Low</label>
                            <input type="radio" id="priorityLow" value="Low" checked={this.state.lawyer_request_priority === 'Low'}
                                onChange={this.onChangeLawyerRequestPriority} />
                        </div>
                        <div className="radio">
                            <label>Medium</label>
                            <input type="radio" id="priorityMedium" value="Medium" checked={this.state.lawyer_request_priority === 'Medium'}
                                onChange={this.onChangeLawyerRequestPriority} />
                        </div>
                        <div className="radio">
                            <label>High</label>
                            <input type="radio" id="priorityHigh" value="High" checked={this.state.lawyer_request_priority === 'High'}
                                onChange={this.onChangeLawyerRequestPriority} />
                        </div>
                        <div>
                            <input className="btn lawyer-a" type="submit" value="Create Request" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}