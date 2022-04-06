import React from "react";
import { useHistory } from "react-router-dom";

const Header2 = () => {

    const history = useHistory();

    const onLogoutClicked = () => {
        localStorage.clear();
        history.replace('/');
      }

      const onAddClicked = () => {
        history.push('/add');
    }

    return(
        <div className="ui fixed menu" style={{backgroundColor: 'rgb(67, 67, 231)'}}>
        <div className="extra content">
        <i className="user icon" style={{color: "white", marginTop: "15px"}}>&nbsp;&nbsp;{localStorage.getItem('email')}</i>
        <div className="visible content" style={{ marginLeft: "2px"}}>
        
        </div>
        
        </div>
        
        <button className="ui animated button" tableindex="0" style={{width: "110%", marginLeft: "900px", marginTop: "7px", marginBottom:"7px", padding: "11px", textAlign:"center"}} onClick={()=>onAddClicked()}>
            <div className="visible content">Add</div>
            <div className="hidden content">
                <i className="pencil alternate icon"></i></div></button>

                <button className="ui animated button" tableindex="0" style={{width: "110%", marginTop: "7px", marginBottom:"7px", padding: "11px", textAlign:"center"}} onClick={() => history.push('/idealisting')}>
<div className="visible content">View</div>
<div className="hidden content">
    <i className="pencil alternate icon"></i></div></button>
            
        <button 
        className="ui animated button" tableindex="0" style={{ marginBottom: "7px", marginTop: "7px"}} onClick={()=>onLogoutClicked()}>
        <div className="visible content">Logout</div>
        <div className="hidden content">
            <i className="power off icon" style={{color: 'rosybrown'}}></i></div></button>
            

            

         
        </div>
    )
};

export default Header2;