/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";

const UpdateHeader = () => {

    const history = useHistory();

    const onLogoutClicked = () => {
        localStorage.clear();
        history.replace('/');
      }



return(

<div className="ui pointing menu" style={{position: 'fixed', left: 0, right: 0, top: 0, backgroundColor: 'white'}}>

<a className="active item">
  <b>User:  </b>&nbsp;&nbsp;{localStorage.getItem('email')}
  </a>
  
  <div className="right menu">

    <a className="ui item" onClick={()=>onLogoutClicked()}>
    <div className="visible content">Logout</div>
    <div className="hidden content"></div>
        

    </a>
  </div>
  </div>

  );
};

export default UpdateHeader;