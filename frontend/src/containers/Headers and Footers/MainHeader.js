/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DropdownExampleFloating from "./dropDown";



const FinalHeader = () => {



return(

<div className="ui pointing menu" style={{position: 'fixed', left: 0, right: 0, top: 0, backgroundColor: 'black', zIndex: 999}}>

<div className="active item">
<b style={{color: 'white'}}>Idea Repository</b>
</div>
 
  <div className="right menu">

  <DropdownExampleFloating />
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
 
  </div>
  </div>
  

  );
};

export default FinalHeader;