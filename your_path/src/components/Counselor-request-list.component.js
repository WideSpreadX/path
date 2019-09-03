import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CounselorRequest = props => (
    <tr>
        <td>{props.counselor_request.counselor_request_description}</td>
        <td>{props.counselor_request.counselor_request_responsible}</td>
        <td>{props.counselor_request.counselor_request_priority}</td>
        <td>
            {/* <Link to={"/medical-requests/edit/"+props.medical_requests._id}>Edit</Link> */}
        </td>
    </tr>
);

export default class CounselorRequestList extends Component {

    constructor(props) {
        super(props);
        this.state = { counselor_requests: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/counselor-requests/counselor-requests')
            .then(res => {
                this.setState({ counselor_requests: res.data });
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    counselorRequestList() {
        return (this.state.counselor_requests.map(function (currentCounselorRequest, i) {
            return <CounselorRequest counselor_request={currentCounselorRequest} key={i} />;
        })
        )
    }

    render() {
        return (
            <div className="counselor-response">
                <h3>Counselor Requests</h3>
                <table className="counselor-request-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.counselorRequestList()}
                    </tbody>
                </table>
            </div>
        )
    }
}