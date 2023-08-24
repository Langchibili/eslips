import React, { useState } from 'react';

export default function Deposits(props){
       function displayDeposits(props){
            return props.data.deposits.map((deposit)=>{
                  return <Deposit key={deposit.id} {...deposit} handleDetailsDisplay={props.handleDetailsDisplay}/>
            })
       }
       return (
        <div className="row">
  <div className="col-xl-12">
    <div className="table-responsive ">
      <div id="example5_wrapper" className="dataTables_wrapper no-footer">
        <table
          className="table-responsive-lg table display mb-4 dataTablesCard order-table card-table text-black dataTable no-footer student-tbl"
          id="example5"
          role="grid"
          aria-describedby="example5_info"
        >
          <thead>
            <tr role="row">
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example5"
                rowSpan={1}
                colSpan={1}
                aria-label=": activate to sort column ascending"
                style={{ width: "27.225px" }}
              >
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkAll"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkAll"
                    />
                  </div>
                </div>
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example5"
                rowSpan={1}
                colSpan={1}
                aria-label="ID Invoice: activate to sort column ascending"
                style={{ width: "89.5px" }}
              >
                Deposit Id
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example5"
                rowSpan={1}
                colSpan={1}
                aria-label="Date: activate to sort column ascending"
                style={{ width: "161.7px" }}
              >
                Date
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example5"
                rowSpan={1}
                colSpan={1}
                aria-label="Recipient: activate to sort column ascending"
                style={{ width: "153.125px" }}
              >
                Account
              </th>
              <th
                className="sorting_asc"
                tabIndex={0}
                aria-controls="example5"
                rowSpan={1}
                colSpan={1}
                aria-label="Email: activate to sort column descending"
                style={{ width: "163.212px" }}
                aria-sort="ascending"
              >
                Account Number
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example5"
                rowSpan={1}
                colSpan={1}
                aria-label="Service Type: activate to sort column ascending"
                style={{ width: "142.962px" }}
              >
                Service Type
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example5"
                rowSpan={1}
                colSpan={1}
                aria-labeSl="Status: activate to sort column ascending"
                style={{ width: "81.775px" }}
              >
                Status
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example5"
                rowSpan={1}
                colSpan={1}
                aria-label=": activate to sort column ascending"
                style={{ width: "42.125px" }}
              />
            </tr>
          </thead>
          <tbody>
            {displayDeposits(props)}
          </tbody>
        </table>
        <div
          className="dataTables_info"
          id="example5_info"
          role="status"
          aria-live="polite"
        >
          Showing 1 to 9 of 9 entries
        </div>
        <div
          className="dataTables_paginate paging_simple_numbers"
          id="example5_paginate"
        >
          <a
            className="paginate_button previous disabled"
            aria-controls="example5"
            data-dt-idx={0}
            tabIndex={0}
            id="example5_previous"
          >
            <i className="fa fa-angle-double-left" aria-hidden="true" />
          </a>
          <span>
            <a
              className="paginate_button current"
              aria-controls="example5"
              data-dt-idx={1}
              tabIndex={0}
            >
              1
            </a>
          </span>
          <a
            className="paginate_button next disabled"
            aria-controls="example5"
            data-dt-idx={2}
            tabIndex={0}
            id="example5_next"
          >
            <i className="fa fa-angle-double-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

       )
}

function Deposit(props){
  const [showDepositBtn, toggleDepositBtn] = useState(false);

  const dateCreated = (dateInput)=>{
      let date = new Date(dateInput)
      date = date.toLocaleString('en-US',{timeZone:'Africa/Harare'})
      date = new Date(date)
      let datePart = date.toDateString()
      let timePart = date.toTimeString()
      timePart = timePart.split(':')
      return datePart+' '+timePart[0]+ ':'+ timePart[1]
  }
 const callClient = ()=>{
     toggleDepositBtn(true)
 }

 const detailsDisplay = (e)=>{
       props.handleDetailsDisplay({
          show:'show',
          data: props,
          type: 'deposits'
       })
 }

  return (
    <tr role="row" className="odd">
    <td className="">
      <div className="checkbox mr-0 align-self-center">
        <div className="custom-control custom-checkbox ">
          <input
            type="checkbox"
            className="form-check-input"
            id="check86"
            required=""
          />
          <label className="custom-control-label" htmlFor="check86" />
        </div>
      </div>
    </td>
    <td>{'#'+props.id}</td>
    <td className="whitesp-no">{dateCreated(props.created_at)}</td>
    <td className="whitesp-no p-0">
      <div className="d-flex py-sm-3 py-1 align-items-center">
        <div>
          <h6 className="font-w500 fs-16 mb-0">{props.accountFirstName+' '+props.accountLastName}</h6>
          <span className="fs-14 font-w400">
            <a href="app-profile.html">{props.accountPhoneNumber}</a>
          </span>
        </div>
      </div>
    </td>
    <td className="whitesp-no sorting_1">
      <a href="ecom-invoice.html">angelamoss@mail.com</a>
    </td>
    <td>Upgrade Component</td>
    <td>
      {showDepositBtn?<span className=" btn btn-outline-success btn-sm w-100" onClick={detailsDisplay}>
        Deposit
      </span>: <span className=" btn btn-outline-danger btn-sm w-100" onClick={callClient}>
        Call Client
      </span>
      }
    </td>
    <td>
      <div className="dropdown">
        <a
          href="javascript:void(0);" 
          className="btn-link btn sharp tp-btn-light btn-primary pill"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
              fill="#ffffff"
            />
            <path
              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
              fill="#ffffff"
            />
            <path
              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
              fill="#ffffff"
            />
          </svg>
        </a>
        <div className="dropdown-menu dropdown-menu-end">
          <a className="dropdown-item" href="javascript:void(0);">
            Delete
          </a>
          <a className="dropdown-item" href="javascript:void(0);">
            Edit
          </a>
        </div>
      </div>
    </td>
  </tr>
  )
}