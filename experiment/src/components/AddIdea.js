import React, {useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../containers/Header";
export const AddIdea = () => {

    const [ideaTitle, setIdeaTitle] = useState("");
    const [ideaDescription, setIdeaDescription] = useState("");
    const [ideaStorypoints, setIdeaStorypoints] = useState("");


    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        let url = "http://localhost:8090/idea";
        console.log(localStorage.getItem('email')) //to check if the email is decoded or not
        let config = {
            params: {
                email: localStorage.getItem('email'),
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
            }
        }
        let formData = new FormData();
        formData.append("ideaTitle", ideaTitle);
        formData.append("ideaDescription", ideaDescription);
        formData.append("ideaStorypoints", ideaStorypoints);
        
        let respo = await axios.post(url, formData, config);
        
        console.log(respo);
        // history.push("/");
    };


    const onLogoutClicked = () => {
        localStorage.removeItem('token')
        history.push('/login');
      }

  
    return (
        <>
            <form>
            <Header />
            <h1 className="page-title">Add Idea</h1>
                <div className="row justify-content-center">
                    <div className="col-3 center-content">

                        <div className="form-floating mb-3">
                        <label className="form-label">Title</label>
                            <input type="text" className="form-control" name="ideaTitle" placeholder="enter your title"
                                   value={ideaTitle}
                                   onChange={(e) => setIdeaTitle(e.target.value)}/>
                           
                        </div>

                        <div className="form-floating mb-3">
                        <label className="form-label">Description</label>
                            <input type="text" className="form-control" name="ideaDescription" placeholder="Description"
                                   value={ideaDescription}
                                   onChange={(e) => setIdeaDescription(e.target.value)}
                            />
                            
                        </div>
                        <div className="form-floating mb-3">
                        <label className="form-label">Story points</label>
                            <input type="number" className="form-control" name="ideaStorypoints" placeholder="story points"
                                   value={ideaStorypoints}
                                   onChange={(e) => setIdeaStorypoints(e.target.value)}
                            />
                            
                        </div>
                        <hr/>
                        <button onClick={(e) => submit(e)}>Submit</button>
                        <button onClick={()=>onLogoutClicked()}>Logout</button>

                    </div>
                </div>
            </form>
        </>
    );
};
