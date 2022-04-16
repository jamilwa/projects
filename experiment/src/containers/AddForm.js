import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addIdeas } from "../redux/actions/ideaActions";
import FinalFooter from "./Headers and Footers/Footer";
import ComponentHeader from "./Headers and Footers/ComponentHeader";

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

            //dispatching the action addIdeas upon click on submit button
            const submit = () => {
                dispatch(addIdeas(obj))
                history.push('/idealisting')
            }
  
    return (
        <>
        <ComponentHeader />
            <form style={{border: '1px solid black', padding: '30px', marginBottom: '20px'}}>
                <div className="row justify-content-center">
                    <div className="col-3 center-content">
                        
                        <div className="form-floating mb-3">
                        <h2 style={{textAlign: 'center', color: 'blue'}}>Add a new Idea</h2>
                        <label className="form-label" style={{height: "24px", width: "231px", color: "#333333", fontStyle: 'Open Sans', fontSize: "14px", lineHeight: "1px"}}>Title</label>
                            <input id = "input-ideaTitle" style={{boxSizing: 'border-box', height: '39px', width: '426px', border: '1px solid #E6E6E6', borderRadius: '10px'}} type="text" className="form-control" name="ideaTitle" placeholder="enter your title"
                                   value={ideaTitle}
                                   onChange={(e) => setIdeaTitle(e.target.value)}/>
                           
                        </div>
                        
                        <div className="form-floating mb-3">
                        <label className="form-label" style={{height: "24px", width: "231px", color: "#333333", fontStyle: 'Open Sans', fontSize: "14px", lineHeight: "24px"}}>Description</label>
                        <br />
                            <textarea id = "input-ideaDesc" style={{boxSizing: 'border-box', height: '100px', width: '426px', border: '1px solid #E6E6E6', borderRadius: '2px'}} type="text" className="form-control" name="ideaDescription" placeholder=" Enter your description"
                                   value={ideaDescription}
                                   onChange={(e) => setIdeaDescription(e.target.value)}
                            />
                            
                        </div>
                        <div className="form-floating mb-3">
                        <label className="form-label" style={{height: "24px", width: "231px", color: "#333333", fontStyle: 'Open Sans', fontSize: "14px", lineHeight: "1px"}}>Story points</label>
                            <input id = "input-ideaSP" style={{boxSizing: 'border-box', height: '39px', width: '426px', border: '1px solid #E6E6E6', borderRadius: '10px'}} type="number" min="1" max="25" className="form-control" name="ideaStorypoints" placeholder="story points"
                                   value={ideaStorypoints}
                                   onChange={(e) => setIdeaStorypoints(e.target.value)}
                            />
                            
                        </div>
                        <hr/>
                        <button 
                        id="btn-submit"
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
            <FinalFooter />
        </>
    );
};