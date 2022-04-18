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
            // window.location = 'http://localhost:3000/idealisting'
            
          }
        }

        return(        
        <div className="four wide column" style={{marginBottom: '50px', marginTop: '10px'}} key={id}>
        
        <Link to={{pathname:`/idea/update/${id}`, state: {id: id, ideaTitle: ideaTitle, ideaDescription: ideaDescription, ideaStorypoints: ideaStorypoints}}}>
        <div className="ui link cards" style={{height: "100%", maxHeight:"150px"}}>
          <div className="card" style={{height: "90%", overflowY: "auto", backgroundColor: 'transparent', borderRadius: '10px', border: '2px solid white'}}>
              <div className="content">
                <div className="description" style={{textAlign: "left", font: "small-caption", fontSize: '17px', color: 'lightgrey'}}><strong style={{color: 'floralwhite'}}>Title: </strong> {ideaTitle}</div>
                <div className="description" style={{textAlign: "left", font: "small-caption", fontSize: '17px', color: 'lightgrey'}}><strong style={{color: 'floralwhite'}}>Description: </strong> {ideaDescription}</div>
                <div className="meta" style={{textAlign: "left", font: "small-caption", fontSize: '17px', color: 'lightgrey'}}><strong style={{color: 'floralwhite'}}>Story points: </strong> {ideaStorypoints}</div>        
                </div>

              </div>
              </div>
              </Link>
              <br />
              
              
              <button className="ui button" style={{color:"white", backgroundColor: 'transparent'}} tableindex="0" onClick={() => handleDelete()}>
              <div className="hidden content">
                  <i className="trash alternate outline icon"></i></div>
              </button>
              
            
          
          </div>
        
          );
    });

    return <>{renderList}</>;
};

export default IdeaComponents;