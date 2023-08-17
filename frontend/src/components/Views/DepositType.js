import React from "react";
import { Link } from 'react-router-dom'; // Import Link

export default class DepositType extends React.Component{
      render(){
          return( 
            <div className="container">
                <div className="section">
                <div className="row ">
                    <div className="col s12 pad-0">
                    <h5 className="bot-20 sec-tit center ">Deposit Type</h5>{" "}
                    <div className="row settings-row">
                        <div className="col s6">
                        <div className="setting-box z-depth-1 center">
                            <Link to='/deposit_form/cash'>
                                <i className="mdi mdi-book-open-page-variant" />
                                <h6>Cash</h6>
                            </Link>
                        </div>
                        </div>
                        <div className="col s6">
                        <div className="setting-box z-depth-1 center">
                            <Link to='/deposit_form/school'>
                                <i className="mdi mdi-book-open-page-variant" />
                                <h6>School</h6>
                            </Link>
                        </div>
                        </div>
                        <div className="col s6">
                        <div className="setting-box z-depth-1 center">
                            <Link to='/deposit_form/cheque'>
                                <i className="mdi mdi-book-open-page-variant" />
                                <h6>Cheque</h6>
                            </Link>
                        </div>
                        </div>
                        <div className="col s6">
                        <div className="setting-box z-depth-1 center">
                            <Link to='/deposit_form/other'>
                                <i className="mdi mdi-book-open-page-variant" />
                                <h6>Other</h6>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          )
      }
  }