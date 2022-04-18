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
        
        
        
            }, [dispatch]);

    const ideas = useSelector((state) => state.allIdeas.ideas);

    

    return(
        <div className="ui grid container">
    <FinalHeader />
    
            {ideas.length?
     <IdeaComponents />
    : <h2 style={{textAlign: 'center'}}>"no data found. Please add a new idea using the Add button at the top."</h2>}

 <FinalFooter />
        
 
        </div>
        
    );
};

export default IdeaListing;