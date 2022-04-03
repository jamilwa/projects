import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteIdea } from "../redux/actions/ideaActions";

const IdeaComponents = () => {

    const dispatch = useDispatch();

    const ideas = useSelector((state) => state.allIdeas.ideas);
    const renderList = ideas.map((idea) => {
        const {id, ideaTitle, ideaDescription, ideaStorypoints} = idea;

        

        const handleDelete = () => {
          if(window.confirm("are you sure you want to delete?")){
            dispatch(deleteIdea(id))
            window.location = 'http://localhost:3000/idealisting'
            
          }
        }

        return(        
        <div className="four wide column" key={id}>
        <Link to={{pathname:`/idea/${id}`, state: {id: id, ideaTitle: ideaTitle, ideaDescription: ideaDescription, ideaStorypoints: ideaStorypoints}}}>
        <div className="ui link cards" style={{height: "100%", maxHeight:"350px", overflowY:"auto"}}>
          <div className="card" style={{height: "80%", overflowY: "auto"}}>
              <div className="content">
                <div className="description" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Title: </strong> {ideaTitle}</div>
                <div className="description" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Description: </strong> {ideaDescription}</div>
                <div className="meta" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}>Story points: {ideaStorypoints}</div>        
                </div>

              </div>
              </div>
              </Link>
              
              <Link to={{pathname:`/idea/update/${id}`, state: {id: id, ideaTitle: ideaTitle, ideaDescription: ideaDescription, ideaStorypoints: ideaStorypoints}}}>
              <button className="ui animated button" tableindex="0">
              <div className="visible content">Edit</div>
              <div className="hidden content">
                  <i className="edit icon"></i></div>
              </button>
              </Link>
              
              
              <button className="ui animated button" style={{color:"red"}} tableindex="0" onClick={() => handleDelete(id)}>
              <div className="visible content">Delete</div>
              <div className="hidden content">
                  <i className="trash alternate outline icon"></i></div>
              </button>
              
            
          
          </div>
        
          );
    });

    return <>{renderList}</>;
};

export default IdeaComponents;