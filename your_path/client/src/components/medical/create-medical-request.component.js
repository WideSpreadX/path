import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMedicalRequest extends Component {
    constructor(props) {
        super(props);

        this.onChangeMedicalRequestDescription = this.onChangeMedicalRequestDescription.bind(this);
        this.onChangeMedicalRequestResponsible = this.onChangeMedicalRequestResponsible.bind(this);
        this.onChangeMedicalRequestPriority = this.onChangeMedicalRequestPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            medical_request_description: '',
            medical_request_responsible: '',
            medical_request_priority: '',
            medical_request_completed: false
        }
    }

    onChangeMedicalRequestDescription(e) {
        this.setState({
            medical_request_description: e.target.value
        });
    }
    onChangeMedicalRequestResponsible(e) {
        this.setState({
            medical_request_responsible: e.target.value
        });
    }
    onChangeMedicalRequestPriority(e) {
        this.setState({
            medical_request_priority: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        //Insert onSubmit Logic Here
        console.log(`Form submitted`);
        console.log(`medical_request Description: ${this.state.medical_request_description}`)
        console.log(`medical_request Responsibility: ${this.state.medical_request_responsible}`)
        console.log(`medical_request Priority: ${this.state.medical_request_priority}`)
        console.log(`medical_request Completed: ${this.state.medical_request_completed}`)

        const newMedicalRequest = {
            medical_request_description: this.state.medical_request_description,
            medical_request_responsible: this.state.medical_request_responsible,
            medical_request_priority: this.state.medical_request_priority,
            medical_request_completed: this.state.medical_request_completed
        }

        axios.post('http://localhost:4000/medical-requests/medical-requests-create', newMedicalRequest)
            .then(res => console.log(res.data));

        this.setState({
            medical_request_description: '',
            medical_request_responsible: '',
            medical_request_priority: '',
            medical_request_completed: false
        });

    }

    render() {
        return (
            <div style={{ marginTop: 30 }}>
                <h3>Create A New Medical Request</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group reason">
                        <label>Reason for Request: </label>
                        <input type="text" className="form-control" value={this.state.medical_request_description} onChange={this.onChangeMedicalRequestDescription} />
                    </div>
                    <div className="form-group personel">
                        <label>Who do you need: </label>
                        <input type="text" className="form-control" value={this.state.medical_request_responsible} onChange={this.onChangeMedicalRequestResponsible} />
                    </div>
                    <div className="group">
                        <label>Priority: </label>
                        <div className="radio">
                            <label>Low</label>
                            <input type="radio" id="priorityLow" value="Low" checked={this.state.medical_request_priority === 'Low'}
                                onChange={this.onChangeMedicalRequestPriority} />
                        </div>
                        <div className="radio">
                            <label>Medium</label>
                            <input type="radio" id="priorityMedium" value="Medium" checked={this.state.medical_request_priority === 'Medium'}
                                onChange={this.onChangeMedicalRequestPriority} />
                        </div>
                        <div className="radio">
                            <label>High</label>
                            <input type="radio" id="priorityHigh" value="High" checked={this.state.medical_request_priority === 'High'}
                                onChange={this.onChangeMedicalRequestPriority} />
                        </div>
                        <div>
                            <input className="btn" type="submit" value="Create Request" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}