import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const DeletePage = () =>{

const {ideaId2} = useParams();
const history = useHistory();

    
const submit = async () => {
    let url = `http://localhost:8090/idea/${ideaId2}`;
    
    console.log(localStorage.getItem('email')) //to check if the email is decoded or not
    let config = {
        params: {
            email: localStorage.getItem('email'),
        },
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
            Accept: "application/json"
        }
    }

    let respo = await axios.delete(url, config);
    console.log('deleted', respo);
    history.push("/idealisting");
}

return (
<>
<div className="ui link cards" style={{maxHeight:"350px", overflowY:"auto"}}>
    <div className="card">
    <div className="content">
      <div className="description" style={{fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Are you sure you want to delete?</strong>
      </div>   
      </div>
      <button className="ui animated button" tableindex="0" onClick={()=>submit()}>
            <div className="visible content">Press here to confirm</div>
            <div className="hidden content">
                <i className="trash alternate icon"></i></div>
            </button>
            <button className="ui animated button" tableindex="0" onClick={() => history.push('/idealisting')}>
            <div className="visible content">Back</div>
            <div className="hidden content">
                <i className="chevron circle left icon"></i></div>
            </button>


    </div>
    </div>

    
</>

)

}
