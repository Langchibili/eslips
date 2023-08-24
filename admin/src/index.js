import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './index.css';
import './normalize.css';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer/Footer';
import Deposited from './components/Views/Deposited';
import Deposits from './components/Views/Deposits';
import Queries from './components/Views/Queries';
import HomePage from './components/Views/HomePage';
import Header from './components/Header/Header';
import Queried from './components/Views/Queried';
import { api_url, getJwt,getLoggedInUserData } from './constants';
import Login from './components/Views/Login';
import LogOutFOrm from './Forms/LogOutForm';
import DetailsDisplay from './components/Includes/DetailsDisplay/DetailsDisplay';

class AppWrapper extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loggedInUserData: null,
      data: {
        queries:null,
        deposits:null,
        queried:null,
        deposited:null
      },
      counts: {
        queries:0,
        deposits:0,
        queried:0,
        deposited:0
      },
      detailsDisplay:{
        show: 'hide',
        data: null,
        type: null
      }
    }
  }

  async componentDidMount(){
    const loggedInUserData = await getLoggedInUserData() // check if user is logged in
    if(loggedInUserData === 'logged-out') {  // if user is logged out
       window.location = '/login' 
    }
    else {
       this.setState({ // set logged in user data
        loggedInUserData : loggedInUserData
       }, async ()=>{  // set all the needed data 
              const queries = await this.getQueries();
              const desposits = await this.getDeposits();
              const queried = await this.getQueried();
              const deposited = await this.getDeposited();
              this.setState({ 
                data: {
                  queries:queries,
                  deposits:desposits,
                  queried:queried,
                  deposited:deposited
                }
              },()=>{ // set counts
                 console.log(this.state)
              })
       })
    }  
  }

  
  getQueries = async ()=>{
      const response = await fetch(api_url+'/queries',{
        headers: {
          'Authorization': `Bearer ${getJwt()}`,
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error))
        return response
  }
  getDeposits= async ()=>{
    const response = await fetch(api_url+'/deposits',{
      headers: {
        'Authorization': `Bearer ${getJwt()}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
      return response
  }
  getQueried = async ()=>{
    const response = await fetch(api_url+'/querieds',{
      headers: {
        'Authorization': `Bearer ${getJwt()}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
      return response
  }
  
  getDeposited = async ()=>{
    const response = await fetch(api_url+'/depositeds',{
      headers: {
        'Authorization': `Bearer ${getJwt()}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
      return response
  }
  
  handleDetailsDisplay = (detailsDisplay)=>{
      this.setState({
        detailsDisplay:detailsDisplay
      })
  }

  render(){
    return(
        <Router>
          <Routes>
            <Route path="/" element={<HomePage {...this.state.counts}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<LogOutFOrm />}/>
            <Route path="/deposits" element={<><Header {...this.state.counts}/><Deposits {...this.state} handleDetailsDisplay={this.handleDetailsDisplay}/></>} />
            <Route path="/deposited" element={<><Header {...this.state.counts}/><Deposited {...this.state} handleDetailsDisplay={this.handleDetailsDisplay}/></>} />
            <Route path="/queries" element={<><Header {...this.state.counts}/><Queries {...this.state} handleDetailsDisplay={this.handleDetailsDisplay}/></>} />
            <Route path="/queried" element={<><Header {...this.state.counts}/><Queried {...this.state} handleDetailsDisplay={this.handleDetailsDisplay}/></>} />
          </Routes>
          <Footer/>
          <DetailsDisplay {...this.state.detailsDisplay}/>
        </Router>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); // create root
root.render(
  <React.StrictMode><AppWrapper/> </React.StrictMode> // render app on root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


