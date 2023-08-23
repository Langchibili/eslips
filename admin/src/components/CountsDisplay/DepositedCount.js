import React from "react";

export default function DepositedCount(){
       return (<div className="widget-stat card">
       <div className="card-body p-4">
         <div className="media ai-icon">
           <span className="me-3 bgl-warning text-warning">
             <svg
               id="icon-orders"
               xmlns="http://www.w3.org/2000/svg"
               width={30}
               height={30}
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth={2}
               strokeLinecap="round"
               strokeLinejoin="round"
               className="feather feather-file-text"
             >
               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
               <polyline points="14 2 14 8 20 8" />
               <line x1={16} y1={13} x2={8} y2={13} />
               <line x1={16} y1={17} x2={8} y2={17} />
               <polyline points="10 9 9 9 8 9" />
             </svg>
           </span>
           <div className="media-body">
             <p className="mb-1">Bills</p>
             <h4 className="mb-0">2570</h4>
             <span className="badge badge-warning">+3.5%</span>
           </div>
         </div>
       </div>
     </div>)
}