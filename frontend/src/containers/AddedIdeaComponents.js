import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import AddIdeaListing from "./addIdeaListing";
import fetchAddedIdeas from "./addIdeaListing";

const AddedIdeaComponents = () => {

    const addIdea = useSelector((state) => state.addingIdeas.addIdea);

         const [ideaTitle, setIdeaTitle] = useState("");
        const [ideaDescription, setIdeaDescription] = useState("");
        const [ideaStorypoints, setIdeaStorypoints] = useState("");

        const history = useHistory();

        return (
            <>
            <div className="card">
                <Header />
        
    
                            <div className="ui link cards">
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
                            <button onClick={(e) => fetchAddedIdeas()}>Submit</button>
    
                        </div>
            
            </>
        );
};

export default AddedIdeaComponents;