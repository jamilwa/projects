// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { selectedIdeas, removeSelectedIdeas } from "../redux/actions/ideaActions";
// import { useHistory } from "react-router-dom";

// const AllIdeaDetails = () => {

//     const idea = useSelector((state) => state.idea);
//     const {ideaTitle, ideaDescription, ideaStorypoints} = idea;
//     const history = useHistory();
//     const { ideaId3 } = useParams();
//     const dispatch = useDispatch();
//     console.log(idea);

//     const fetchAllIdeaDetails = async () => {

//         const api = `http://localhost:8090/idea/${ideaId3}`
//         let config = {
//           params: {
//               email: localStorage.getItem('email'),
//           },
//           headers: {
//               Authorization: "Bearer " + localStorage.getItem('token'),
//           }
//       }
//         const response = await axios.get(api, config)
//         .catch((error) => {
//             console.log("Error", error)
//         });
//         dispatch(selectedIdeas(response.data));
//     };

//     useEffect(() => {
//         if(ideaId3 && ideaId3 !== "") fetchAllIdeaDetails();
//         return() => {
//             dispatch(removeSelectedIdeas());
//         };
//     }, [ideaId3]);


//     return(<div className="ui grid container">
//     {Object.keys(idea).length === 0 ? (
//       <div>...Loading</div>
//     ) : (
//       <div className="ui grid container">
//         <div className="ui centered card">
//             <div className="content">
//               <p style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Title: </strong> {ideaTitle}</p>
//               <p style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Description: </strong> {ideaDescription}</p>
//               <p className="meta" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Story points: </strong> {ideaStorypoints}</p>
//                 </div>
//                 <button className="ui animated button" tableindex="0" onClick={() => history.push('/allidearepo')}>
//                 <div className="visible content">Back</div>
//                 <div className="hidden content">
//                 <i className="left arrow icon"></i></div>
//                 </button>
//               </div>
//             </div>
  
//     )}
//   </div>
// );
// };

// export default AllIdeaDetails;