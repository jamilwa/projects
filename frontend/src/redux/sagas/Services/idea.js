import axios from "axios";
import { useParams } from "react-router-dom";
import { deleteIdea } from "../../actions/ideaActions";

export function requestGetIdea() {
    let url = "http://localhost:8090/idea/user";
    let config = {
        params: {
            email: localStorage.getItem('email'),
        },
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }

    const final = axios.get(url, config)
    return final.then((response) => 
        response.data
       
    )
    .catch((error) => {
        console.log(error);
    })
    



};


export function RequestSingleGetIdea(id) {
    const api = `http://localhost:8090/idea/${id}`
    let config = {
     
      headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
      }
  }
    const final = axios.get(api, config)
    return final.then((response) => 
    console.log("haha", response.data)
    )
    .catch((error) => {
        console.log(error);
    })
}

//add not used yet
export function requestSetIdeas(obj) {

    let url = "http://localhost:8090/idea";
    let config = {
        params: {
            email: localStorage.getItem('email'),
        },
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
            Accept: "application/json"
        }
    }

    axios.post(url, obj, config)
    .then((response) => {
        console.log(response.data);
    })
    .cathch((error) => {
        console.log(error);
    })
    
}




export const RequestIdeaDeleted = (id) => {

console.log("XYZ ", id);
let url = `http://localhost:8090/idea/${id}`;
let config = {
    
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }
}

const final = axios.delete(url, config)
return final.then((response) => 
    response.data
   
)
.catch((error) => {
    console.log(error);
})

}


export const RequestUpdateIdea = (id, obj) => {


const api = `http://localhost:8090/idea/${id}`
        let config = {
          headers: {
              Authorization: "Bearer " + localStorage.getItem('token'),
          }
      }


        const final = axios.put(api, obj, config)
        return final.then((response) => 
            console.log("respNew", response.data)
           
        )
        .catch((error) => {
            console.log(error);
        })
        
    }