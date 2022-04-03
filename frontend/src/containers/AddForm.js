import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../containers/Header";
import { useDispatch, useSelector } from "react-redux";
import { addIdeas } from "../redux/actions/ideaActions";

export const AddForm = () => {

    const dispatch = useDispatch();
    const ideas = useSelector((state) => state.allideas);

    const [ideaTitle, setIdeaTitle] = useState("");
    const [ideaDescription, setIdeaDescription] = useState("");
    const [ideaStorypoints, setIdeaStorypoints] = useState("");


    const history = useHistory();

    let obj = {
                "ideaTitle": ideaTitle,
                "ideaDescription": ideaDescription,
                "ideaStorypoints": ideaStorypoints
            }

            const submit = () => {
                dispatch(addIdeas(obj))
                window.location = 'http://localhost:3000/idealisting';
                history.push('idealisting')
            }
  
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
                        <br />
                            <textarea style={{width:"100%"}} type="text" className="form-control" name="ideaDescription" placeholder="Description"
                                   value={ideaDescription}
                                   onChange={(e) => setIdeaDescription(e.target.value)}
                            />
                            
                        </div>
                        <div className="form-floating mb-3">
                        <label className="form-label">Story points</label>
                            <input type="number" min="0" className="form-control" name="ideaStorypoints" placeholder="story points"
                                   value={ideaStorypoints}
                                   onChange={(e) => setIdeaStorypoints(e.target.value)}
                            />
                            
                        </div>
                        <hr/>
                        <button 
                        disabled={!ideaTitle || !ideaDescription || !ideaStorypoints}
                        className="ui animated button" tableindex="0" onClick={() => submit()}>
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