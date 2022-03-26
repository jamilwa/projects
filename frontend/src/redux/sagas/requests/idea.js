import axios from "axios";

export function requestGetIdea() {
    return axios.request({
        method: 'GET',
        url: 'http://localhost:8090/idea/user',

        params: {
            email: localStorage.getItem('email'),
            },

        headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
            }
          }
    )
};