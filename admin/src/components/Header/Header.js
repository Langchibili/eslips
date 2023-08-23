import React from "react";
import DepositsCount from "../CountsDisplay/DepositsCount";
import QueriesCount from "../CountsDisplay/QueriesCount";
import DepositedCount from "../CountsDisplay/DepositedCount";
import QueriedCount from "../CountsDisplay/QueriedCount";
import { Link } from 'react-router-dom'; // Import Link
import HomePage from "../Views/HomePage";

export default class Header extends React.Component{
    render(){
        return( 
          <div className="row">
          <div className="col">
          <Link to="/">
             Logo
          </Link>
          </div>

          <div className="col">
          <Link to="/deposits">
             <DepositsCount/>
          </Link>
          </div>
          
          <div className="col">
          <Link to="/queries">
            <QueriesCount/>
            </Link>
          </div>
          <div className="col">
          <Link to="/deposited">
             <DepositedCount/>
             </Link>
          </div>

          <div className="col">
          <Link to="/queried">
             <QueriedCount/>
             </Link>
          </div>
        </div>
        )
    }
}