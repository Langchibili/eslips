import React from "react";
import DepositsCount from "../CountsDisplay/DepositsCount";
import QueriesCount from "../CountsDisplay/QueriesCount";
import DepositedCount from "../CountsDisplay/DepositedCount";
import QueriedCount from "../CountsDisplay/QueriedCount";
import { Link } from 'react-router-dom'; // Import Link

export default class HomePage extends React.Component{
      render(){
          return( 
            <div className="container">
              <div className="text text-center">
                <h2>Welcome Langson</h2>
                <h3>What would you like to open?</h3><br/>
               </div>
               <div className="row">
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
                <div className="w-100"></div>

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

            </div>
          )
      }
  }