import React, {useEffect, useState} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import IdeaComponents from "./ideaComponents";
import { setIdeas } from "../redux/actions/ideaActions";
import Header2 from "./Header2";
import Footer from "./Footer";


const IdeaListing = () => {
  
    // const [isData, setIsData] = useState(true);

    const dispatch = useDispatch();

    // const fetchIdeas = async () => {
    //     const url = "http://localhost:8090/idea/user"
    //     let configuration = {
    //       params: {
    //           email: localStorage.getItem('email'),
    //       },
    //       headers: {
    //           Authorization: "Bearer " + localStorage.getItem('token'),
    //       }
    //     }
    //       const response = await axios.get(url, configuration)
    //     .catch((error) => {
    //         console.log("error", error);

    //     });
    //     dispatch(setIdeas(response.data));
    //     console.log(response.data);
    //     if (response.data.length === 0){
    //         setIsData(false);
    //     }
    // };
    useEffect(() => {
        dispatch(setIdeas());
        
        
            }, []);

    const ideas = useSelector((state) => state);
    console.log("Ideas: ", ideas);

    

    return(<div className="ui grid container">
    <Header2 />
     <IdeaComponents />


 <Footer />
        
 
        </div>
        
        
    );
};

export default IdeaListing;