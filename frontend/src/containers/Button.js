import React from "react";
import { useHistory } from "react-router-dom";



export function Button() {
    
    const history = useHistory();

    const onLogoutClicked = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        history.push('/');
      }

    return (
<button 
        className="ui animated button" tableindex="0" style={{marginLeft: "900px", marginBottom: "7px", marginTop: "7px"}} 
        onClick={()=>onLogoutClicked()}>
        <div className="visible content">Logout</div>
        <div className="hidden content">
            <i className="power off icon" style={{color: 'rosybrown'}}></i>
        </div>
</button>
);
}