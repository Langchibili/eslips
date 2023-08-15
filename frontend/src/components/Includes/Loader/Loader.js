import React from 'react';
export default function Loader(props){
    if(props.type === 'page-loader'){
        return (<div className="preloader-background">
        <div className="preloader-wrapper">
          <div id="preloader" />
          <img style={{ width: '40px', display: 'block', margin: '0 auto' }} src="/eslip-temp-logo.png" alt="Loading icon" />
        </div>
      </div>
      )
    }
    else{
        return (
            <div className="preloader-background">
                <div className="preloader-wrapper">
                <div id="preloader" />
                </div>
            </div>
            )
    }
}