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
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          
          <div className="middle aligned row">
            <div className="column rp">
              <h1>{ideaTitle}</h1>
              <p>{ideaDescription}</p>
              <h2>
              <div className="meta">Story points: {ideaStorypoints}</div>
            </h2>
              
                
                </div>
                <button onClick={() => history.push('/idealisting')}>Back</button>
              </div>
            </div>
          </div>
  
    )}
  </div>
);
};

export default IdeaDetails;