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
                Accept: "application/json"
            }
        }

        let obj = {
            "ideaTitle": ideaTitle,
            "ideaDescription": ideaDescription,
            "ideaStorypoints": ideaStorypoints
        }

    
        let respo = await axios.post(url, obj, config);
        console.log(respo);
        history.push("/idealisting");
    };
  
    return (
        <>
            <form>
            <Header />
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
                        <button 
                        disabled={!ideaTitle || !ideaDescription || !ideaStorypoints}
                        className="ui animated button" tableindex="0" onClick={(e) => submit(e)}>
                        <div className="visible content">Submit</div>
                        <div className="hidden content">
                            <i className="chevron circle right icon"></i></div></button>

                            <button 
                        className="ui animated button" tableindex="0" onClick={(e) => history.push('/idealisting')}>
                        <div className="visible content">Back</div>
                        <div className="hidden content">
                            <i className="chevron circle left icon"></i></div></button>


                    </div>
                </div>
            </form>
        </>
    );
};