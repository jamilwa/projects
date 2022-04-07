import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import IdeaComponents from "./ideaComponents";
import { setIdeas } from "../redux/actions/ideaActions";
import FinalHeader from "./Headers and Footers/MainHeader";
import FinalFooter from "./Headers and Footers/Footer";


const IdeaListing = () => {
  

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setIdeas());
        
        
        
            }, []);

    const ideas = useSelector((state) => state);
    console.log("Ideas: ", ideas.allIdeas.ideas);
    console.log("length", ideas.allIdeas.ideas.length);

    

    return(
        <div className="ui grid container">
    <FinalHeader />
    
            {ideas.allIdeas.ideas.length?
     <IdeaComponents />
    : "no data found"}

 <FinalFooter />
        
 
        </div>
        
    );
};

export default IdeaListing;