import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateIdea } from "../redux/actions/ideaActions";

export const UpdateIdea = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    const ideas = useSelector((state) => state.allIdeas);
    const [id, setId] = useState(()=>{return location.state.id});
    const [ideaTitle, setIdeaTitle] = useState(()=>{return location.state.ideaTitle});
    const [ideaDescription, setIdeaDescription] = useState(()=>{return location.state.ideaDescription});
    const [ideaStorypoints, setIdeaStorypoints] = useState(()=>{return location.state.ideaStorypoints});

    const history = useHistory();


let obj = {
            "id": id,
            "ideaTitle": ideaTitle,
            "ideaDescription": ideaDescription,
            "ideaStorypoints": ideaStorypoints
        }


    const onButtonHandler = () => {
            dispatch(updateIdea(obj))
            window.location = 'http://localhost:3000/idealisting';
            history.push('/idealisting')
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
                            <textarea type="text" className="form-control" style={{width: "100%", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}} name="ideaDescription" placeholder="Description"
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