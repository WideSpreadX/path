import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MedicalRequest = props => (
    <tr>
        <td>{props.medical_request.medical_request_description}</td>
        <td>{props.medical_request.medical_request_responsible}</td>
        <td>{props.medical_request.medical_request_priority}</td>
        <td>
            {/* <Link to={"/medical-requests/edit/"+props.medical_requests._id}>Edit</Link> */}
        </td>
    </tr>
);

export default class MedicalRequestList extends Component {

    constructor(props) {
        super(props);
        this.state = { medical_requests: [] };
    }

    componentDidMount() {
        axios.get('heroku_25q3k83c:gpf46trvu55u846vqmaeto4ojv@ds123698.mlab.com:23698/heroku_25q3k83c/counselor-requests/counselor-requests-create/medical-requests/medical-requests')
            .then(res => {
                this.setState({ medical_requests: res.data });
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    medicalRequestList() {
        return (this.state.medical_request.map(function (currentMedicalRequest, i) {
            return <MedicalRequest medical_request={currentMedicalRequest} key={i} />;
        })
        )
    }

    render() {
        return (
            <div className="medical-response">
                <h3>Medical Request List</h3>
                <table className="medical-request-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.medicalRequestList()}
                    </tbody>
                </table>
            </div>
        )
    }
}