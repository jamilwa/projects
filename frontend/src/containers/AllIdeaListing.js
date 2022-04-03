// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setIdeas } from "../redux/actions/ideaActions";
// import { useHistory } from "react-router-dom";
// import AllIdeaComponents from "./AllIdeaComponents";
// import { LoginPage } from "../components/LoginPage";
// import Header2 from "./Header2";
// import Footer from "./Footer";

// const AllIdeaListing = () => {
//     const ideas = useSelector((state) => state);
//     const [isData, setIsData] = useState(true);
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const fetchIdeas = async () => {
//         const url = "http://localhost:8090/idea"
//         let configuration = {
//           params: {
//               email: localStorage.getItem('email'),
//           },
//           headers: {
//               Authorization: "Bearer " + localStorage.getItem('token'),
//           }
//         }
//           const response = await axios.get(url, configuration)
//         .catch((error) => {
//             console.log("error", error);

//         });
//         dispatch(setIdeas(response.data));
//         console.log(response.data);
//         if (response.data.length === 0){
//             setIsData(false);
//         }
//     };

//     useEffect(() => {
//         fetchIdeas();


//     }, []);
//     console.log("Ideas: ", ideas);

    

//     return(
        
//         <div className="ui grid container">
//         <Header2 />
//         {isData ? <AllIdeaComponents />:
    
//     <div>
//     <p>No data found.</p>
//     </div>
//     }

//     <Footer />
//         </div>
        
//     );
// };

// export default AllIdeaListing;