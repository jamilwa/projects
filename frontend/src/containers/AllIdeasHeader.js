/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useHistory } from "react-router-dom";

const AllIdeaHeader = () => {

    const history = useHistory();

    const onLogoutClicked = () => {
        localStorage.clear();
        history.replace('/');
      }



return(

<div className="ui pointing menu" style={{position: 'fixed', left: 0, right: 0, top: 0, backgroundColor: 'white', zIndex: 999}}>

<a className="active item">
  <b>User:  </b>&nbsp;&nbsp;{localStorage.getItem('email')}
  </a>
  
  <div className="right menu">

  <Link to={"/add"}>
  <a className="item">
    Add an Idea
  </a>
  </Link>
  <Link to={"/idealisting"}>
  <a className="item">
    Home
  </a>
  </Link>

    <a className="ui item" onClick={()=>onLogoutClicked()}>
    <div className="visible content">Logout</div>
    <div className="hidden content"></div>
        

    </a>
  </div>
  </div>

  );
};

export default AllIdeaHeader;