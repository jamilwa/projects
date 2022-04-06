import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIdeas } from "../redux/actions/ideaActions";
import FinalFooter from "./Footer";
import AllIdeaComponents from "./AllIdeaComponents";
import AllIdeaHeader from "./AllIdeasHeader";


const AllIdeaListing = () => {
  

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllIdeas());
        
        
        
            }, []);

    const ideas = useSelector((state) => state);
    console.log("Ideas: ", ideas.allIdeas.ideas);
    console.log("length", ideas.allIdeas.ideas.length);

    

    return(<div className="page-container">
        <div className="ui grid container">
    <AllIdeaHeader />
    
            {ideas.allIdeas.ideas.length?
     <AllIdeaComponents />
    : "no data found"}
    
 <FinalFooter />
        
 
        </div>
        </div>
        
    );
};

export default AllIdeaListing;