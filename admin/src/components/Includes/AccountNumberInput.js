import * as React from 'react';

// Class component
export default class AccountNumberInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            accountNumber: '',
            digits:{
                0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:'',10:'',11:'',12:''
            },
            saved: false
        }
    }
    handleAccountNumberSave = (e)=>{
        e.preventDefault()
        const digits = this.state.digits
        const accountNumber = Object.values(digits).join('');
        this.setState({
            accountNumber:accountNumber,
            saved: true
        },()=>{
            this.props.updateAccountNumber(this.state.accountNumber) // add account number to the parent div
        })
    }
    handleAccountNumberEdit = (e)=>{
        this.setState({
            saved: false
        })
    }
    handleDigitChange = (e)=>{
        const key = e.target.name
        const digits = this.state.digits
        const accountNumber = Object.values(digits).join('');
        digits[key] = e.target.value
        this.setState({
            digits:digits,
            accountNumber:accountNumber,
            saved: false
        })
    }
    renderSaveButton = ()=>{
        if(this.state.accountNumber.length >= 8 && !this.state.saved){
            return <a className="waves-effect waves-light btn btn-rounded deep-orange lighten-2" onClick={this.handleAccountNumberSave}>save</a>
        }
        else if(this.state.accountNumber.length >= 8 && this.state.saved){
            return (<><a className="waves-effect waves-light btn btn-rounded blue-grey lighten-2">saved</a> <a className="waves-effect waves-light btn btn-rounded blue lighten-2" onClick={this.handleAccountNumberEdit}>edit</a></>)
        }
        else{
            return <a className="waves-effect waves-light btn btn-rounded blue-grey lighten-2">save</a>
        }
         
    }
  render() {
    return (<>
           <label htmlFor="account_number" className=""> Add Account Number </label>
           <div className="input-field col s12" > 
                <input name="0" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="1" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="2" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="3" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="4" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="5" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="6" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="7" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="8" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="9" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="10" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="11" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <input name="12" disabled={this.state.saved} className='account-number-input' type="text" onChange={this.handleDigitChange} />
                <br/>
                {this.renderSaveButton()}
            </div>
           </>
        )
  }
}
