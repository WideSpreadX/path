import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCounselorRequest extends Component {
    constructor(props) {
        super(props);

        this.onChangeCounselorRequestDescription = this.onChangeCounselorRequestDescription.bind(this);
        this.onChangeCounselorRequestResponsible = this.onChangeCounselorRequestResponsible.bind(this);
        this.onChangeCounselorRequestPriority = this.onChangeCounselorRequestPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            counselor_request_description: '',
            counselor_request_responsible: '',
            counselor_request_priority: '',
            counselor_request_completed: false
        }
    }

    onChangeCounselorRequestDescription(e) {
        this.setState({
            counselor_request_description: e.target.value
        });
    }
    onChangeCounselorRequestResponsible(e) {
        this.setState({
            counselor_request_responsible: e.target.value
        });
    }
    onChangeCounselorRequestPriority(e) {
        this.setState({
            counselor_request_priority: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        //Insert onSubmit Logic Here
        console.log(`Form submitted`);
        console.log(`counselor_request Description: ${this.state.counselor_request_description}`)
        console.log(`counselor_request Responsibility: ${this.state.counselor_request_responsible}`)
        console.log(`counselor_request Priority: ${this.state.counselor_request_priority}`)
        console.log(`counselor_request Completed: ${this.state.counselor_request_completed}`)

        const newCounselorRequest = {
            counselor_request_description: this.state.counselor_request_description,
            counselor_request_responsible: this.state.counselor_request_responsible,
            counselor_request_priority: this.state.counselor_request_priority,
            counselor_request_completed: this.state.counselor_request_completed
        }

        axios.post('heroku_25q3k83c:gpf46trvu55u846vqmaeto4ojv@ds123698.mlab.com:23698/heroku_25q3k83c/counselor-requests/counselor-requests-create', newCounselorRequest)
            .then(res => console.log(res.data));

        this.setState({
            counselor_request_description: '',
            counselor_request_responsible: '',
            counselor_request_priority: '',
            counselor_request_completed: false
        });

    }

    render() {
        return (
            <div style={{ marginTop: 30 }}>
                <h3>Create A New Counselor Request</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group reason">
                        <label>Reason for Request: </label>
                        <input type="text" className="form-control" value={this.state.counselor_request_description} onChange={this.onChangeCounselorRequestDescription} />
                    </div>
                    <div className="form-group personel">
                        <label>Who do you need: </label>
                        <input type="text" className="form-control" value={this.state.counselor_request_responsible} onChange={this.onChangeCounselorRequestResponsible} />
                    </div>
                    <div className="group">
                        <label>Priority: </label>
                        <div className="radio">
                            <label>Low</label>
                            <input type="radio" id="priorityLow" value="Low" checked={this.state.counselor_request_priority === 'Low'}
                                onChange={this.onChangeCounselorRequestPriority} />
                        </div>
                        <div className="radio">
                            <label>Medium</label>
                            <input type="radio" id="priorityMedium" value="Medium" checked={this.state.counselor_request_priority === 'Medium'}
                                onChange={this.onChangeCounselorRequestPriority} />
                        </div>
                        <div className="radio">
                            <label>High</label>
                            <input type="radio" id="priorityHigh" value="High" checked={this.state.counselor_request_priority === 'High'}
                                onChange={this.onChangeCounselorRequestPriority} />
                        </div>
                        <div>
                            <input className="btn counselor-a" type="submit" value="Create Request" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}