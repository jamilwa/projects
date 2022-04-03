// import React from "react";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Header2 from "./Header2";


// const AllIdeaComponents = () => {

//     const history = useHistory();
//     const ideas = useSelector((state) => state.allIdeas.ideas);
//     const renderList = ideas.map((idea) => {
//         const {id, ideaTitle, ideaDescription, ideaStorypoints} = idea;
       
//         return(        
//         <div className="four wide column" key={id}>
//         <Header2 />
//         <Link to={`/allidea/${id}`}>
//         <div className="ui link cards" style={{height: "100%", maxHeight:"350px", overflowY:"auto"}}>
//           <div className="card" style={{height: "40%", overflowY: "auto"}}>
//               <div className="content">
//                 <div className="description" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Title: </strong> {ideaTitle}</div>
//                 <div className="description" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Description: </strong> {ideaDescription}</div>
//                 <div className="meta" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}>Story points: {ideaStorypoints}</div>        
//                 </div>


//               </div>
//             </div>
//             </Link>
         
//           </div>
        
//           );
//     });

//     return <>{renderList}</>;
// };

// export default AllIdeaComponents;