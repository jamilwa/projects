import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedIdeas } from "../redux/actions/ideaActions";
import { useHistory } from "react-router-dom";
import ComponentHeader from "./Headers and Footers/ComponentHeader";

const AllIdeaDetails = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const ideas = useSelector((state) => state.idea);
  const [id, setId] = useState(()=>{return location.state.id});
  const [ideaTitle, setIdeaTitle] = useState(()=>{return location.state.ideaTitle});
  const [ideaDescription, setIdeaDescription] = useState(()=>{return location.state.ideaDescription});
  const [ideaStorypoints, setIdeaStorypoints] = useState(()=>{return location.state.ideaStorypoints});

    console.log("correct" , ideas);

    useEffect(() => {
        dispatch(selectedIdeas(id))
    }, [dispatch, id]);


    return(<div className="ui grid container">
    {Object.keys(ideas).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui grid container" style={{marginTop: '15px', marginBottom: '5px'}}>
      <ComponentHeader />
        <div className="ui centered card" style={{backgroundColor: 'transparent'}}>
            <div className="content">
              <p style={{textAlign: "left", fontStyle: "oblique", fontSize: '17px', color: 'lightgrey'}}><strong style={{color: 'floralwhite'}}>Title: </strong> {ideaTitle}</p>
              <p style={{textAlign: "left", fontStyle: "oblique", fontSize: '17px', color: 'lightgrey'}}><strong style={{color: 'floralwhite'}}>Description: </strong> {ideaDescription}</p>
              <p className="meta" style={{textAlign: "left", fontStyle: "oblique", fontSize: '17px', color: 'lightgrey'}}><strong style={{color: 'floralwhite'}}>Story points: </strong> {ideaStorypoints}</p>
            </div>
            <hr />
                <button className="ui animated button" style={{backgroundColor: 'transparent'}} tableindex="0" onClick={() => history.push('/repository')}>
                <div className="visible content">Back</div>
                <div className="hidden content">
                <i className="left arrow icon"></i>
                </div>
                </button>
          </div>
        </div>
  
    )}
  </div>
);
};

export default AllIdeaDetails;