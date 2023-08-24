import React from "react";
import { api_url, getJwt } from "../../../constants";

export default function DetailsDisplay(props){
       if(props.type === 'deposits'){
          return <DepositDetails {...props}/>
       }
       else if(props.type === 'deposits'){
            return <DepositedDetails {...props}/>
       }
       else if(props.type === 'deposits'){
            return <QueryDetails {...props}/>
       }
       else if(props.type === 'deposits'){
            return <QueriedDetails {...props}/>
       }
}


function DepositDetails(props){
    const saveDeposit = async ()=>{
        const depositRequestBody = {
            accountFirstName: props.data.accountFirstName,
            accountLastName: props.data.accountLastName,
            accountPhoneNumber: props.data.accountPhoneNumber,
            depositerFirstName: props.data.depositerFirstName,
            depositerLastName: props.data.depositerLastName,
            depositerPhoneNumber: props.data.depositerPhoneNumber,
            accountNumber:props.data.accountNumber,
            clientId: props.data.clientId
        }
        try {
            const response = await fetch(api_url+'/depositeds', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getJwt()}`,
                },
                body: JSON.stringify(depositRequestBody),
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData)
            } else {
                console.log('errror')
                // this.setState({
                //     hasError:true,
                //     error:'Failed to submit deposit, please try again later!'
                // })
            }
        } catch (error) {
            console.log('error 2')
            // this.setState({
            //     hasError:true,
            //     error:'Failed to submit deposit, please try again later!'
            // })
        }
    }

    return (
        <div className={"sidebar-right "+props.show}>
         <div className="bg-overlay" />
   <a
     className="sidebar-right-trigger wave-effect wave-effect-x"
     data-bs-toggle="tooltip"
     data-placement="right"
     data-original-title="Change Layout"
     href="javascript:void(0);"
   >
     <span>
       <i className="fa fa-cog fa-spin" />
     </span>
   </a>
   <div className="sidebar-right-inner">
     <h4>
       Deposit Slip
       
     </h4>
     <div className="card-tabs">
       <ul className="nav nav-tabs" role="tablist">
         <li className="nav-item">
           <a className="nav-link" href="#tab1" data-bs-toggle="tab">
             Details
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#tab2" data-bs-toggle="tab">
             Complete
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link active" href="#tab3" data-bs-toggle="tab">
             Delete
           </a>
         </li>
       </ul>
     </div>
     <div className="tab-content tab-content-default tabcontent-border">
       <div className="fade tab-pane" id="tab1">
         <div className="admin-settings">
           <div className="row">
             <div className="col-xl-12">
               <p>Set Theme Colour</p>
             </div>
             <div className="col-sm-12">
               <p>Set Sidebar Image</p>
               <div className="navigation-bg flex-wrap">
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_1"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/1.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_1"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/1.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_2"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/2.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_2"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/2.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_3"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/3.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_3"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/3.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_5"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/5.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_5"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/5.jpg")'
                     }}
                   />
                 </span>
                 <a
                   href="javascript:void(0)"
                   className="btn btn-primary btn-sm remove-img"
                 >
                   Remove Image
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="fade tab-pane" id="tab2" >
       <a
         onClick={saveDeposit}
         className="btn btn-primary btn-sm pull-right"
       >
         Complete Deposit
       </a>
       </div>
       <div className="fade tab-pane active show" id="tab3">
         <div className="admin-settings" />
       </div>
     </div>
   </div>
        </div>)
}

function DepositedDetails(props){
    return (
        <div className={"sidebar-right "+props.show}>
         <div className="bg-overlay" />
   <a
     className="sidebar-right-trigger wave-effect wave-effect-x"
     data-bs-toggle="tooltip"
     data-placement="right"
     data-original-title="Change Layout"
     href="javascript:void(0);"
   >
     <span>
       <i className="fa fa-cog fa-spin" />
     </span>
   </a>
   <div className="sidebar-right-inner">
     <h4>
       Pick your style
       <a
         href="javascript:void(0);"
         className="btn btn-primary btn-sm pull-right"
       >
         Delete All Cookie
       </a>
     </h4>
     <div className="card-tabs">
       <ul className="nav nav-tabs" role="tablist">
         <li className="nav-item">
           <a className="nav-link" href="#tab1" data-bs-toggle="tab">
             Theme
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#tab2" data-bs-toggle="tab">
             Header
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link active" href="#tab3" data-bs-toggle="tab">
             Content
           </a>
         </li>
       </ul>
     </div>
     <div className="tab-content tab-content-default tabcontent-border">
       <div className="fade tab-pane" id="tab1">
         <div className="admin-settings">
           <div className="row">
             <div className="col-xl-12">
               <p>Set Theme Colour</p>
             </div>
             <div className="col-sm-12">
               <p>Set Sidebar Image</p>
               <div className="navigation-bg flex-wrap">
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_1"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/1.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_1"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/1.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_2"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/2.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_2"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/2.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_3"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/3.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_3"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/3.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_5"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/5.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_5"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/5.jpg")'
                     }}
                   />
                 </span>
                 <a
                   href="javascript:void(0)"
                   className="btn btn-primary btn-sm remove-img"
                 >
                   Remove Image
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="fade tab-pane" id="tab2" />
       <div className="fade tab-pane active show" id="tab3">
         <div className="admin-settings" />
       </div>
     </div>
   </div>
        </div>)
}

function QueryDetails(props){
    return (
        <div className={"sidebar-right "+props.show}>
         <div className="bg-overlay" />
   <a
     className="sidebar-right-trigger wave-effect wave-effect-x"
     data-bs-toggle="tooltip"
     data-placement="right"
     data-original-title="Change Layout"
     href="javascript:void(0);"
   >
     <span>
       <i className="fa fa-cog fa-spin" />
     </span>
   </a>
   <div className="sidebar-right-inner">
     <h4>
       Pick your style
       <a
         href="javascript:void(0);"
         className="btn btn-primary btn-sm pull-right"
       >
         Delete All Cookie
       </a>
     </h4>
     <div className="card-tabs">
       <ul className="nav nav-tabs" role="tablist">
         <li className="nav-item">
           <a className="nav-link" href="#tab1" data-bs-toggle="tab">
             Theme
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#tab2" data-bs-toggle="tab">
             Header
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link active" href="#tab3" data-bs-toggle="tab">
             Content
           </a>
         </li>
       </ul>
     </div>
     <div className="tab-content tab-content-default tabcontent-border">
       <div className="fade tab-pane" id="tab1">
         <div className="admin-settings">
           <div className="row">
             <div className="col-xl-12">
               <p>Set Theme Colour</p>
             </div>
             <div className="col-sm-12">
               <p>Set Sidebar Image</p>
               <div className="navigation-bg flex-wrap">
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_1"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/1.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_1"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/1.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_2"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/2.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_2"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/2.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_3"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/3.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_3"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/3.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_5"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/5.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_5"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/5.jpg")'
                     }}
                   />
                 </span>
                 <a
                   href="javascript:void(0)"
                   className="btn btn-primary btn-sm remove-img"
                 >
                   Remove Image
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="fade tab-pane" id="tab2" />
       <div className="fade tab-pane active show" id="tab3">
         <div className="admin-settings" />
       </div>
     </div>
   </div>
        </div>)
}

function QueriedDetails(props){
    return (
        <div className={"sidebar-right "+props.show}>
         <div className="bg-overlay" />
   <a
     className="sidebar-right-trigger wave-effect wave-effect-x"
     data-bs-toggle="tooltip"
     data-placement="right"
     data-original-title="Change Layout"
     href="javascript:void(0);"
   >
     <span>
       <i className="fa fa-cog fa-spin" />
     </span>
   </a>
   <div className="sidebar-right-inner">
     <h4>
       Pick your style
       <a
         href="javascript:void(0);"
         className="btn btn-primary btn-sm pull-right"
       >
         Delete All Cookie
       </a>
     </h4>
     <div className="card-tabs">
       <ul className="nav nav-tabs" role="tablist">
         <li className="nav-item">
           <a className="nav-link" href="#tab1" data-bs-toggle="tab">
             Theme
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#tab2" data-bs-toggle="tab">
             Header
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link active" href="#tab3" data-bs-toggle="tab">
             Content
           </a>
         </li>
       </ul>
     </div>
     <div className="tab-content tab-content-default tabcontent-border">
       <div className="fade tab-pane" id="tab1">
         <div className="admin-settings">
           <div className="row">
             <div className="col-xl-12">
               <p>Set Theme Colour</p>
             </div>
             <div className="col-sm-12">
               <p>Set Sidebar Image</p>
               <div className="navigation-bg flex-wrap">
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_1"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/1.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_1"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/1.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_2"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/2.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_2"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/2.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_3"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/3.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_3"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/3.jpg")'
                     }}
                   />
                 </span>
                 <span>
                   <input
                     className="chk-col-primary filled-in"
                     id="sidebar_img_5"
                     name="sidebar_img_bg"
                     type="radio"
                     defaultValue="images/sidebar-img/5.jpg"
                   />
                   <label
                     htmlFor="sidebar_img_5"
                     className="bg-image-sidebar"
                     style={{
                       backgroundImage: 'url("images/sidebar-img/5.jpg")'
                     }}
                   />
                 </span>
                 <a
                   href="javascript:void(0)"
                   className="btn btn-primary btn-sm remove-img"
                 >
                   Remove Image
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="fade tab-pane" id="tab2" />
       <div className="fade tab-pane active show" id="tab3">
         <div className="admin-settings" />
       </div>
     </div>
   </div>
        </div>)
}

