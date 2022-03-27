import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { updateIdea, removeSelectedIdeas } from "../redux/actions/ideaActions";
import { useHistory } from "react-router-dom";
import Header from "./Header";

export const UpdateIdea = () => {

   
    const [ideaTitle, setIdeaTitle] = useState();
    const [ideaDescription, setIdeaDescription] = useState();
    const [ideaStorypoints, setIdeaStorypoints] = useState();

    const history = useHistory();
    const { ideaId1 } = useParams();

    const fetchUpdatedIdeaDetails = async () => {
   console.log("id of the idea: ", ideaId1)
        const api = `http://localhost:8090/idea/${ideaId1}`
        let config = {
          headers: {
              Authorization: "Bearer " + localStorage.getItem('token'),
          }
      }

      let obj = {
        "ideaTitle": ideaTitle,
        "ideaDescription": ideaDescription,
        "ideaStorypoints": ideaStorypoints
    }

        const response = await axios.put(api, obj, config)
        .then((response) => {
            console.log(response)
           
        })
        
    };

    const onButtonHandler = () => {
            fetchUpdatedIdeaDetails();
            history.push("/idealisting");
    }

    return(
   
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
                        className="ui animated button" tableindex="0" onClick={() => onButtonHandler()}>
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