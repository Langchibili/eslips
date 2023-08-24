import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './index.css';
import './normalize.css';
import reportWebVitals from './reportWebVitals';
import BottomNav from './components/BottomNav/BottomNav';
import DepositType from './components/Views/DepositType';
import DepositForm from './components/Views/DepositForm';
import QueryFormPage from './components/Views/QueryFormPage';
import HomePage from './components/Views/HomePage';
import Header from './components/Header/Header';
import { getNotificationPermision, setClientId, setUserCurrentLocation } from './constants';


class AppWrapper extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  async componentDidMount(){
     setClientId() // set a unique clientIdcookie
     setUserCurrentLocation()
     getNotificationPermision()
  }

  render(){
    return(
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/deposit_type" element={<DepositType/>} />
        <Route path="/deposit_form/:type" element={<DepositForm />} />
        <Route path="/query_form" element={<QueryFormPage />} />
      </Routes>
      <BottomNav/>
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


