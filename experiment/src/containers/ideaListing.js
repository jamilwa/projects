import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import IdeaComponents from "./ideaComponents";
import { setIdeas } from "../redux/actions/ideaActions";

const IdeaListing = () => {
    const ideas = useSelector((state) => state);

    const dispatch = useDispatch();

    const fetchIdeas = async () => {
        const url = "http://localhost:8090/idea/user"
        let configuration = {
          params: {
              email: localStorage.getItem('email'),
          },
          headers: {
              Authorization: "Bearer " + localStorage.getItem('token'),
          }
        }
          const response = await axios.get(url, configuration)
        .catch((error) => {
            console.log("error", error);

        });
        dispatch(setIdeas(response.data));
    };

    useEffect(() => {
        fetchIdeas();


    }, []);
    console.log("Ideas: ", ideas);
    return(
        <div className="ui grid container">
        <IdeaComponents />
        </div>
        
    );
};

export default IdeaListing;