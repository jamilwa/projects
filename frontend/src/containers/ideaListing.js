import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import IdeaComponents from "./ideaComponents";
import { setIdeas } from "../redux/actions/ideaActions";
import Header2 from "./Header2";
import Footer from "./Footer";


const IdeaListing = () => {
  

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setIdeas());
        
        
        
            }, []);

    const ideas = useSelector((state) => state);
    console.log("Ideas: ", ideas.allIdeas.ideas);

    

    return(<div className="ui grid container">
    <Header2 />
    
            {ideas.allIdeas.ideas.length?
     <IdeaComponents />
    : "no data found"}

 <Footer />
        
 
        </div>
        
        
    );
};

export default IdeaListing;