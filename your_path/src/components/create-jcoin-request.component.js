import React, { Component } from 'react';
import axios from 'axios';
/*
JCoin: {
id: Number
product_number: Number (description)
product_name: String (responsible)
value: Number (priority)
routing: Number 
transfer: Number
owner: String
owner_id: Number
transfer_id: Number
sale_confirmation_number: Number
venmo_account_number: Number
venmo_account_f_name: String
venmo_account_l_name: String
}
*/
export default class JcoinRequest extends Component {
    constructor(props) {
        super(props);

        this.onChangeProductNumber = this.onChangeProductNumber.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            jcoin_request_product_number: '',
            jcoin_request_product_name: '',
            jcoin_request_value: '',
        }
    }

    onChangeProductNumber(e) {
        this.setState({
            jcoin_request_product_number: e.target.value
        });
    }
    onChangeProductName(e) {
        this.setState({
            jcoin_request_product_name: e.target.value
        });
    }
    onChangeValue(e) {
        this.setState({
            jcoin_request_value: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        //Insert onSubmit Logic Here
        console.log(`Form submitted`);
        console.log(`jcoin_request product_number: ${this.state.jcoin_request_product_number}`)
        console.log(`jcoin_request Responsibility: ${this.state.jcoin_request_product_name}`)
        console.log(`jcoin_request value: ${this.state.jcoin_request_value}`)

        const newJcoinRequest = {
            jcoin_request_product_number: this.state.jcoin_request_product_number,
            jcoin_request_product_name: this.state.jcoin_request_product_name,
            jcoin_request_value: this.state.jcoin_request_value,
        }

        axios.post('http://localhost:4000/jcoin-requests/jcoin-requests-create', newJcoinRequest)
            .then(res => console.log(res.data));

        this.setState({
            jcoin_request_product_number: '',
            jcoin_request_product_name: '',
            jcoin_request_value: '',
        });

    }

    render() {
        return (
            <div style={{ marginTop: 30 }}>
                <h3>Get jCoins's</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group reason">
                        <label>Please Select Amount you would like to purchase:  </label>
                        <input type="text" className="form-control" value={this.state.jcoin_request_product_number} onChange={this.onChangeProductNumber} />
                    </div>
                    <div className="form-group personel">
                        <label> </label>
                        <input type="text" className="form-control" value={this.state.jcoin_request_product_name} onChange={this.onChangeProductName} />
                    </div>
                    <div className="group">
                        <label>Value: </label>
                        <div className="radio">
                            <label>1</label>
                            <input type="radio" id="valueLow" value="Low" checked={this.state.jcoin_request_value === 'Low'}
                                onChange={this.onChangeValue} />
                        </div>
                        <div className="radio">
                            <label>2</label>
                            <input type="radio" id="valueMedium" value="Medium" checked={this.state.jcoin_request_value === 'Medium'}
                                onChange={this.onChangeValue} />
                        </div>
                        <div className="radio">
                            <label>3</label>
                            <input type="radio" id="valueHigh" value="High" checked={this.state.jcoin_request_value === 'High'}
                                onChange={this.onChangeValue} />
                        </div>
                        <div>
                            <input className="btn jcoin-aquire" type="submit" value="Get jCoins" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}