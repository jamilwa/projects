import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteIdea } from "../redux/actions/ideaActions";

const IdeaComponents = () => {

    const dispatch = useDispatch();

    //extracting the state from the global state
    const ideas = useSelector((state) => state.allIdeas.ideas);
    const renderList = ideas.map((idea) => {
        const {id, ideaTitle, ideaDescription, ideaStorypoints} = idea;

        //dispatching the action deleteIdea
        const handleDelete = () => {
          if(window.confirm("are you sure you want to delete?")){
            dispatch(deleteIdea(id))        
          }
        }

        return(        
        <div className="four wide column" style={{marginBottom: '50px', marginTop: '10px'}} key={id}>
        
        <Link to={{pathname:`/idea/update/${id}`, state: {id: id, ideaTitle: ideaTitle, ideaDescription: ideaDescription, ideaStorypoints: ideaStorypoints}}}>
        <div className="ui link cards" style={{height: "100%", maxHeight:"150px"}}>
          <div className="card" style={{height: "80%", overflowY: "auto", backgroundColor: 'lightyellow'}}>
              <div className="content">
                <div className="description" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Title: </strong> {ideaTitle}</div>
                <div className="description" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Description: </strong> {ideaDescription}</div>
                <div className="meta" style={{textAlign: "left", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}>Story points: {ideaStorypoints}</div>        
                </div>

              </div>
              </div>
              </Link>
              
              
              <button className="ui animated button" style={{color:"red"}} tableindex="0" onClick={() => handleDelete()}>
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