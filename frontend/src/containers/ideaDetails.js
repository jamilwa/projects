import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedIdeas, removeSelectedIdeas } from "../redux/actions/ideaActions";
import { useHistory } from "react-router-dom";

const IdeaDetails = () => {

    const idea = useSelector((state) => state.idea);
    const {ideaTitle, ideaDescription, ideaStorypoints} = idea;
    const history = useHistory();
    const { ideaId } = useParams();
    const dispatch = useDispatch();
    console.log(idea);

    const fetchIdeaDetails = async () => {

        const api = `http://localhost:8090/idea/${ideaId}`
        let config = {
          params: {
              email: localStorage.getItem('email'),
          },
          headers: {
              Authorization: "Bearer " + localStorage.getItem('token'),
          }
      }
        const response = await axios.get(api, config)
        .catch((error) => {
            console.log("Error", error)
        });
        dispatch(selectedIdeas(response.data));
    };

    useEffect(() => {
        if(ideaId && ideaId !== "") fetchIdeaDetails();
        return() => {
            dispatch(removeSelectedIdeas());
        };
    }, [ideaId]);


    return(<div className="ui grid container">
    {Object.keys(idea).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui grid container">
        <div className="ui centered card">
            <div className="content">
              <h3>Title: {ideaTitle}</h3>
              <p>Description: {ideaDescription}</p>
              <p>Story points: {ideaStorypoints}</p>
                </div>
                <button className="ui animated button" tableindex="0" onClick={() => history.push('/idealisting')}>
                <div className="visible content">Back</div>
                <div className="hidden content">
                <i className="left arrow icon"></i></div>
                </button>
              </div>
            </div>
  
    )}
  </div>
);
};

export default IdeaDetails;