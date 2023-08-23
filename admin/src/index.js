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
import { api_url, getJwt } from './constants';
import Login from './components/Views/Login';
import LogOutFOrm from './Forms/LogOutForm';

class AppWrapper extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: {
        queries:null,
        deposits:null,
        queried:null,
        deposited:null
      }
    }
  }

  async componentDidMount(){
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
     })
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
    const response = await fetch(api_url+'/queried',{
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
    const response = await fetch(api_url+'/deposited',{
      headers: {
        'Authorization': `Bearer ${getJwt()}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
      return response
  }

  render(){
    return(
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<LogOutFOrm />}/>
            <Route path="/deposits" element={<><Header/><Deposits/></>} />
            <Route path="/deposited" element={<><Header/><Deposited /></>} />
            <Route path="/queries" element={<><Header/><Queries/></>} />
            <Route path="/queried" element={<><Header/><Queried /></>} />
          </Routes>
          <Footer/>
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


