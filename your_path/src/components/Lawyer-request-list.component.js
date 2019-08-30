import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LawyerRequest = props => (
    <tr>
        <td>{props.lawyer_requests.lawyer_request_description}</td>
        <td>{props.lawyer_requests.lawyer_request_responsiblity}</td>
        <td>{props.lawyer_requests.lawyer_request_priority}</td>
        <td>
            {/* <Link to={"/medical-requests/edit/"+props.medical_requests._id}>Edit</Link> */}
        </td>
    </tr>
);

export default class LawyerRequestList extends Component {

    constructor(props) {
        super(props);
        this.state = { lawyer_requests: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/lawyer-requests/lawyer-requests-list')
            .then(res => {
                this.setState({ lawyer_request: res.data });
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    lawyerRequestList() {
        return (this.state.lawyer_requests.map(function (currentLawyerRequest, i) {
            return <LawyerRequest lawyer_request={currentLawyerRequest} key={i} />;
        })
        )
    }

    render() {
        return (
            <div className="lawyer-response">
                <h3>Lawyer Requests</h3>
                <table className="lawyer-request-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.lawyerRequestList()}
                    </tbody>
                </table>
            </div>
        )
    }
}