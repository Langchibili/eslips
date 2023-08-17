import React from "react";
import { useParams } from 'react-router-dom';
import DepositCashForm from "../../Forms/DepositCashForm";
import SchoolDepositForm from "../../Forms/SchoolDepositForm";

export default function DepositForm(){
          let params = useParams();
          if(params.type === 'cash'){
            return <DepositCashForm />
          }
          else if(params.type === 'school'){
            return <SchoolDepositForm />
          }
          else{
            <div className="container">
                Other Forms To Be Added Later
            </div>
          }
  }