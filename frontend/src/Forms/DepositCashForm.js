import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import AccountNumberInput from '../components/Includes/AccountNumberInput';
import { api_url } from '../constants';

export default class DepositCashForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            accountNumber:'',
            hasError:false,
            error:''
        };

        // Create Refs for input fields
        this.accountFirstNameRef = React.createRef();
        this.accountLastNameRef = React.createRef();
        this.accountPhoneNumberRef = React.createRef();
        this.depositerFirstNameRef = React.createRef();
        this.depositerLastNameRef = React.createRef();
        this.depositerPhoneNumberRef = React.createRef();
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const accountFirstName = this.accountFirstNameRef.current.value;
        const accountLastName = this.accountLastNameRef.current.value;
        const accountPhoneNumber = this.accountPhoneNumberRef.current.value;
        const depositerFirstName = this.depositerFirstNameRef.current.value;
        const depositerLastName = this.depositerLastNameRef.current.value;
        const depositerPhoneNumber = this.depositerPhoneNumberRef.current.value;
        const accountNumber = this.state.accountNumber
        const depositRequestBody = {
            accountFirstName: accountFirstName,
            accountLastName: accountLastName,
            accountPhoneNumber: accountPhoneNumber,
            depositerFirstName: depositerFirstName,
            depositerLastName: depositerLastName,
            depositerPhoneNumber: depositerPhoneNumber,
            accountNumber:accountNumber
        }
        
        if(accountNumber.length >= 8){
            try {
                const response = await fetch(api_url+'/deposits', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(depositRequestBody),
                });
    
                if (response.ok) {
                    const responseData = await response.json();
                    console.log(responseData)
                } else {
                    this.setState({
                        hasError:true,
                        error:'Failed to submit deposit, please try again later!'
                    })
                }
            } catch (error) {
                this.setState({
                    hasError:true,
                    error:'Failed to submit deposit, please try again later!'
                })
            }
        }
        else{
            this.setState({
                hasError:true,
                error:'You must include the Account Number'
            })
        }
    }
    updateAccountNumber = (accountNumber)=>{
        this.setState({
            accountNumber:accountNumber,
            hasError: false
        })
    }
    render() {
        return (
            <div className='container'><h4>Cash Deposit Form</h4>
            <FormGroup>
            <div className="input-field col s12"> 
                <i className="mdi mdi-account-outline prefix" />
                <input id="account_first_name" ref={this.accountFirstNameRef} type="text"/>
                <label htmlFor="account_first_name" className=""> Account First Name </label>
            </div>
            <div className="input-field col s12"> 
                <i className="mdi mdi-account-outline prefix" />
                <input id="acount_last_name" ref={this.accountLastNameRef} type="text" />
                <label htmlFor="account_last_name" className=""> Account Last Name </label>
            </div>
            <AccountNumberInput updateAccountNumber={this.updateAccountNumber}/>
            <div className="input-field col s12"> 
                <i className="mdi mdi-cellphone prefix" />
                <input id="account_phone_number" ref={this.accountPhoneNumberRef} type="text" className="validate" />
                <label htmlFor="account_phone_number" className=""> Account Phone Number </label>
            </div>

            <div className="input-field col s12"> 
                <i className="mdi mdi-account-outline prefix" />
                <input id="deposit_amount" ref={this.depositAmountRef} type="text" />
                <label htmlFor="deposit_amount" className=""> Deposit Amount </label>
            </div>
            Notes:
            k100: 10, k50: 2:, etc  | Table here 
            <div className="input-field col s12"> 
                <i className="mdi mdi-account-outline prefix" />
                <input id="depositer_first_name" ref={this.depositerFirstNameRef}  type="text" className="validate" />
                <label htmlFor="depositer_first_name" className=""> Depositer Fist Name </label>
            </div>
            <div className="input-field col s12"> 
                <i className="mdi mdi-account-outline prefix" />
                <input id="depositer_last_name" ref={this.depositerLastNameRef} type="text" className="validate" />
                <label htmlFor="depositer_last_name" className=""> Depositer Last Name </label>
            </div>
            
            <div className="input-field col s12"> 
                <i className="mdi mdi-cellphone prefix" />
                <input id="depositer_phone_number" ref={this.depositerPhoneNumberRef} type="text" className="validate" />
                <label htmlFor="depositer_phone_number" className=""> Depositer Phone Number </label>
            </div>
            {this.state.hasError? <span className='alert alert-danger'>{this.state.error}</span> : ''}
            <button onClick={this.handleSubmit} style={{marginBottom:'75px'}} className="btn waves-effect waves-light bg-primary" name="action">Submit
                <i class="mdi mdi-message-text-outline right"></i>
            </button>
            
            {/* <div
                id="modal1"
                className="modal"
                tabIndex={0}
                style={{
                zIndex: 1003,
                display: "none",
                opacity: 0,
                top: "4%",
                transform: "scaleX(0.8) scaleY(0.8)"
                }}
            >
                <div className="modal-content">
                <h4>Modal Header</h4>
                <p>
                    Make Sure You Double Check The Details Because Corrections Won't Be Made After Submitting.
                </p>
                </div>
                <div className="modal-footer">
                <a href="#" className="modal-close waves-effect waves-red btn-flat">
                    Cancel
                </a>
                <a href="#" onClick={this.handleSubmit} className="modal-close waves-effect waves-green btn-flat">
                    Continue
                </a>
                </div>
            </div> */}
            </FormGroup>
           </div>
        );
    }
}

