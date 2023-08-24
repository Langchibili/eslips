import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { api_url,getClientId } from '../constants';

export default class QueryForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            queryType:'',
            query: '',
            hasError:false,
            belongsToBank: false,
            error:''
        };

        // Create Refs for input fields
        this.clientFirstNameRef = React.createRef();
        this.clientLastNameRef = React.createRef();
        this.otherQueryRef = React.createRef();
    }
    prepareQuery = (query)=>{ 
        let q = query.replace('?','')
        q = q.split(' ')
        q = q.join('_')
        return q
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const clientFirstName = this.clientFirstNameRef.current.value || ''
        const clientLastName = this.clientLastNameRef.current.value || ''
        const otherQuery = this.otherQueryRef.current? this.otherQueryRef.current.value : ''
        const queryType = this.state.queryType
        let query = this.state.query
        const clientId = getClientId()
        if(query.length < 0){ // then query is not set
            query = 'other'
        }
        else{
            query = this.prepareQuery(query) // change query from 'a query example' to 'a_query_example'
        }
        const queryRequestBody = {
            clientFirstName: clientFirstName,
            clientLastName: clientLastName,
            queryType:queryType,
            query:query,
            belongsToBank: this.state.belongsToBank,
            otherQuery: otherQuery,
            clientId: clientId
        }

        if(clientFirstName.length < 1){ // client must include name
            this.setState({
                hasError:true,
                error:'You must provide a name'
            })
            return
        }

        if(queryType.length > 1){ // you must add a category of the query
           if(query.length > 1){ // if the query is less that 1, you cannot submit
                try {
                    const response = await fetch(api_url+'/queries', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(queryRequestBody),
                    });
        
                    if (response.ok) {
                        const responseData = await response.json();
                        console.log(responseData)
                    } else {
                        this.setState({
                            hasError:true,
                            error:'Failed to submit query request, please try again later!'
                        })
                    }
                } catch (error) {
                    this.setState({
                        hasError:true,
                        error:'Failed to submit query request, please try again later!'
                    })
                }
           }
           else{
            this.setState({
                hasError:true,
                error:'You must select query'
            })
           }
        }
        else{
            this.setState({
                hasError:true,
                error:'You must select a query category'
            })
        }
    }
    setSelectedQueryType = (queryType)=>{
        this.setState({
            queryType:queryType,
            hasError: false
        })
    }
    selectQuery = (query) =>{
        this.setState({
            query:query,
            hasError: false
        })
    }
    handleMemberSelect = (e,value)=>{
        if(value === 'yes'){
            this.setState({
                belongsToBank:true
            })
        }
        else{
            this.setState({
                belongsToBank:false
            })
        }
    }
    
    render() {
        return (
            <div className='container'><h4>Query Form</h4>
            <FormGroup>
            <div className="input-field col s12"> 
                <i className="mdi mdi-account-outline prefix" />
                <input id="client_first_name" ref={this.clientFirstNameRef} type="text"/>
                <label htmlFor="client_first_name" className=""> Your First Name </label>
            </div>
            <div className="input-field col s12"> 
                <i className="mdi mdi-account-outline prefix" />
                <input id="client_last_name" ref={this.clientLastNameRef} type="text" />
                <label htmlFor="client_last_name" className=""> Your Last Name </label>
            </div>
            <MemberRadioButtons handleMemberSelect={this.handleMemberSelect}/><br/>
            <QueryTypeSelect setSelectedQueryType={this.setSelectedQueryType} selectedQueryType={this.state.queryType}/>
            {this.state.queryType.length > 1?<QuerySelect selectQuery={this.selectQuery} selectedQuery={this.state.query} selectedQueryType={this.state.queryType} otherQueryRef={this.otherQueryRef} />: ''}
            
            {this.state.hasError? <span className='alert alert-danger'>{this.state.error}</span> : ''}
            <button onClick={this.handleSubmit} style={{marginBottom:'75px'}} className="btn waves-effect waves-light bg-primary" name="action">Submit
                <i className="mdi mdi-message-text-outline right"></i>
            </button>
           
            </FormGroup>
           </div>
        );
    }
}

const QueryTypeSelect = (props)=>{

    const handleSelectChange = (e) => {
        props.setSelectedQueryType(e.target.value);
    }

    return (
            <Box sx={{ minWidth: 120,marginBottom:5 }}>
            <FormControl fullWidth>
                <InputLabel id="category-label">What's Your Query About? </InputLabel>
                <Select
                labelId="category-label"
                id="category"
                name="category"
                label="Age"
                value={props.selectedQueryType}
                onChange={handleSelectChange}
                >
                <MenuItem value="">Select an MenuItem</MenuItem>
                        <MenuItem value="Account_Information">Account Information</MenuItem>
                        <MenuItem value="Transactions">Transactions</MenuItem>
                        <MenuItem value="Loans_and_Credit">Loans and Credit</MenuItem>
                        <MenuItem value="Online_and_Mobile_Banking">Online and Mobile Banking</MenuItem>
                        <MenuItem value="Foreign_Exchange_and_International_Transactions">Foreign Exchange and International Transactions</MenuItem>
                        <MenuItem value="Account_Management">Account Management</MenuItem>
                        <MenuItem value="Investments_and_Retirement_Planning">Investments and Retirement Planning</MenuItem>
                        <MenuItem value="Fees_and_Charges">Fees and Charges</MenuItem>
                        <MenuItem value="Security_and_Fraud_Prevention">Security and Fraud Prevention</MenuItem>
                        <MenuItem value="General_Financial_Advice">General Financial Advice</MenuItem>
                        <MenuItem value="Business_Banking_for_business_customers">Business Banking (for business customers)</MenuItem>
                        <MenuItem value="Estate_Planning_and_Trust_Services">Estate Planning and Trust Services</MenuItem>
                        <MenuItem value="other">other</MenuItem>
                </Select>
            </FormControl>
            </Box>
    );
}
const QuerySelect = (props)=>{
    const handleSelectChange = (event) => {
        props.selectQuery(event.target.value);
    }
    const selectedQuery = props.selectedQuery
    const selectedQueryType = props.selectedQueryType
    
    let queries = []
    if(selectedQueryType === "Account_Information"){
        queries = [
            "How can I open a new account?",
            "What types of accounts do you offer?",
            "How do I check my account balance?",
            "Can you explain the transactions on my account statement?",
            "How do I update my account information, such as my address or phone number?"
        ];
    }
    else if(selectedQueryType === "Transactions"){
        queries = [
            "How do I deposit money into my account?",
            "How can I withdraw cash from my account?",
            "Can I get a cashier's check or money order?",
            "How do I transfer money to another account, both within the bank and to other banks?",
            "Can I set up automatic bill payments?"
        ];
    }
    else if(selectedQueryType === "Loans_and_Credit"){
        queries = [
            "What types of loans do you offer?",
            "How do I apply for a loan?",
            "What are the interest rates for loans and credit products?",
            "What is the process for getting a credit card?",
            "How do I qualify for a mortgage?"
        ];
    }
    else if(selectedQueryType === "Online_and_Mobile_Banking"){
        queries = [
            "How do I sign up for online banking?",
            "Can you help me with issues related to my online banking account?",
            "How do I reset my password?",
            "What security measures are in place for online transactions?"
        ];
    }
    else if(selectedQueryType === "Foreign_Exchange_and_International_Transactions"){
        queries = [
            "What are the current exchange rates for foreign currencies?",
            "How do I buy or sell foreign currency?",
            "Can you help me with an international money transfer?"
        ];
    }

    else if(selectedQueryType === "Account_Management"){
        queries = [
            "How do I set up direct deposit?",
            "Can I link my accounts together?",
            "How do I close an account?",
            "How can I order checks?"
        ];
    }
    else if(selectedQueryType === "Investments_and_Retirement_Planning"){
        queries = [
            "What investment options do you offer?",
            "How do I open an investment account?",
            "Can you help me with retirement planning?"
        ];
    }

    else if(selectedQueryType === "Fees_and_Charges"){
        queries = [
            "What are the risks and potential returns of different investment products?",
            "What are the fees associated with my account?",
            "Can you explain a fee that I see on my account statement?",
            "Are there ways to avoid certain fees?"
        ];
    }
    else if(selectedQueryType === "Security_and_Fraud_Prevention"){
        queries = [
            "How can I protect my account from fraud?",
            "What should I do if I suspect fraudulent activity on my account?",
            "Can you help me report a lost or stolen card?"
        ];
    }
    else if(selectedQueryType === "General_Financial_Advice"){
        queries = [
            "Can you provide advice on budgeting and saving?",
            "How can I improve my credit score?",
            "What are some ways to manage my debt?"
        ];
    }
    else if(selectedQueryType === "Business_Banking_for_business_customers"){
        queries = [
            "How can I open a business account?",
           "What business loan options are available?",
           "Can you assist with payroll processing?"
        ];
    }
    else if(selectedQueryType === "Estate_Planning_and_Trust_Services"){
        queries = [
            "How can I set up a trust account?",
            "What estate planning services do you offer?"
        ];
    }
    else if(selectedQueryType === "other"){
        return <OtherQueryInput otherQueryRef={props.otherQueryRef}/>
    }

    return (
        <Box sx={{ minWidth: 120,marginBottom:5 }}>
        <FormControl fullWidth>
            <InputLabel id="query-label">Pick What You Want To Ask About</InputLabel>
            <Select
                labelId="query-label"
                id="query"
                name="query"
                label="Query"
                value={props.selectedQuery}
                onChange={handleSelectChange}
            >
                <MenuItem value="">Select Query</MenuItem>
                {queries.map((query, index) => (
                    <MenuItem key={index} value={query}>
                        {query}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        </Box>
        );
}

const OtherQueryInput = (props)=>{
     return (
        <div className="input-field col s12">
          <i className="mdi mdi-pencil prefix"></i>
          <textarea ref={props.otherQueryRef} id="textarea-prefix" className="materialize-textarea" style={{height: 45}}></textarea>
          <label htmlFor="textarea-prefix" className="">Tell about the query or leave blank</label>
        </div>
     )
}

function MemberRadioButtons(props) {
    return (
      <>
        <FormLabel id="demo-row-radio-buttons-group-label">Are you a member of our bank?</FormLabel>
        <RadioGroup
          onChange={props.handleMemberSelect}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </>

    );              
  }