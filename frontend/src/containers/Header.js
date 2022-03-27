import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {

    const history = useHistory();

    const onLogoutClicked = () => {
        localStorage.removeItem('token');
       
     function checkLogin() {
            if(localStorage.getItem('email')){
                history.push('/')
            }
        }
    checkLogin();
      }

    return(
        <div className="ui fixed menu" style={{backgroundColor: "#c6d7eb"}}>
        <div className="ui container center">
        <div className="extra content">
        <a><i className="user icon" style={{color: "green", marginTop: "15px"}}>&nbsp;&nbsp;{localStorage.getItem('email')}</i>
        <div className="visible content" style={{ marginLeft: "2px"}}>
        
        </div>
        </a>
        </div>

        <button 
        className="ui animated button" tableindex="0" style={{marginLeft: "900px", marginBottom: "7px", marginTop: "7px"}} onClick={()=>onLogoutClicked()}>
        <div className="visible content">Logout</div>
        <div className="hidden content">
            <i className="power off icon" style={{color: 'rosybrown'}}></i></div></button>
        </div>
        </div>
    )
};

export default Header;