/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

const ComponentHeader = () => {

    const history = useHistory();

    const onLogoutClicked = () => {
        localStorage.clear();
        history.replace('/');
      }



return(

<div className="ui pointing menu" style={{position: 'fixed', left: 0, right: 0, top: 0, backgroundColor: 'black', zIndex: 999}}>

<a className="active item" style={{color: 'white'}}>
<i className="user circle icon" style={{marginTop: '1px'}}></i>
  &nbsp;&nbsp;{localStorage.getItem('email')}
  </a>
  
  <div className="right menu">

    <Button className="ui button" onClick={()=>onLogoutClicked()}>
    <div className="visible content">Logout</div>
    
        

    </Button>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  </div>
  </div>

  );
};

export default ComponentHeader;