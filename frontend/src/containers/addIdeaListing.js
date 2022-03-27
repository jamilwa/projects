import React, {useEffect, useState} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import AddedIdeaComponents from "./AddedIdeaComponents";
import { addIdeas } from "../redux/actions/ideaActions";

const AddIdeaListing = () => {

    const addIdea = useSelector((state) => state);
    
    const [ideaTitle, setIdeaTitle] = useState("");
    const [ideaDescription, setIdeaDescription] = useState("");
    const [ideaStorypoints, setIdeaStorypoints] = useState("");
    

    const dispatch = useDispatch();

    const fetchAddedIdeas = async () => {
        const url = "http://localhost:8090/idea"
        let configuration = {
          params: {
              email: localStorage.getItem('email'),
          },
          headers: {
              Authorization: "Bearer " + localStorage.getItem('token'),
          }
        };

        let obj = {
            "ideaTitle": ideaTitle,
            "ideaDescription": ideaDescription,
            "ideaStorypoints": ideaStorypoints
        }

          const response = await axios.post(url, obj, configuration)
        .catch((error) => {
            console.log("error", error);

        });
        dispatch(addIdeas(response.data));
    };

    useEffect(() => {
        fetchAddedIdeas();


    }, []);
    console.log("Added Ideas: ", addIdea);
    return(
        <div className="ui grid container">
        <AddedIdeaComponents />
        </div>
        
    );
};

export default AddIdeaListing;