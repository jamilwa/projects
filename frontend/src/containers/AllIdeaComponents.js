import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteIdea } from "../redux/actions/ideaActions";

const AllIdeaComponents = () => {

    const dispatch = useDispatch();

    const ideas = useSelector((state) => state.allIdeas.ideas);
    const renderList1 = ideas.map((idea) => {
        const {id, ideaTitle, ideaDescription, ideaStorypoints} = idea;

        

        const handleDelete = () => {
          if(window.confirm("are you sure you want to delete?")){
            dispatch(deleteIdea(id))
            // window.location = 'http://localhost:3000/idealisting'
            
          }
        }

        return(        
        <div className="four wide column" style={{marginBottom: "25px", marginTop: '10px'}} key={id}>
        
        <Link to={{pathname:`/repository/${id}`, state: {id: id, ideaTitle: ideaTitle, ideaDescription: ideaDescription, ideaStorypoints: ideaStorypoints}}}>
        <div className="ui link cards" style={{height: "100%", maxHeight:"150px"}}>
          <div className="card" style={{height: "80%", overflowY: "auto"}}>
              <div className="content">
                <div className="description" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Title: </strong> {ideaTitle}</div>
                <div className="description" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Description: </strong> {ideaDescription}</div>
                <div className="meta" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}>Story points: {ideaStorypoints}</div>        
                </div>

              </div>
              </div>
              </Link>
            
          
          </div>
        
          );
    });

    return <>{renderList1}</>;
};

export default AllIdeaComponents;