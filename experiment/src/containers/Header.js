import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {

    const history = useHistory();

    const onLogoutClicked = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        history.push('/');
      }

    return(
        <div className="ui fixed menu">
        <div className="ui container center">
        <h2>Welcome</h2>
        <button className="button-right" onClick={()=>onLogoutClicked()}>Logout</button>
        </div>
        </div>
    )
};

export default Header;