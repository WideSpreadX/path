import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JcoinRequest = props => (
    <tr>
        <td>{props.jcoin_request.jcoin_request_product_number}</td>
        <td>{props.jcoin_request.jcoin_request_product_name}</td>
        <td>{props.jcoin_request.jcoin_request_value}</td>
        <td>
            {/* <Link to={"/medical-requests/edit/"+props.medical_requests._id}>Edit</Link> */}
        </td>
    </tr>
);

export default class JcoinRequestList extends Component {

    constructor(props) {
        super(props);
        this.state = { jcoin_request: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/jcoin-requests/jcoin-requests')
            .then(res => {
                this.setState({ jcoin_request: res.data });
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    jcoinRequestList() {
        return (this.state.jcoin_request.map(function (currentJcoinRequest, i) {
            return <JcoinRequest jcoin_request={currentJcoinRequest} key={i} />;
        })
        )
    }

    render() {
        return (
            <div className="jcoin-response">
                <h3>Your jCoin Balance History</h3>
                <table className="jcoin-request-table">
                    <thead>
                        <tr>
                            <th>Product Bought</th>
                            <th>Amount Paid</th>
                            <th>Fund Type</th>
                            <th>More Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.jcoinRequestList()}
                    </tbody>
                </table>
            </div>
        )
    }
}