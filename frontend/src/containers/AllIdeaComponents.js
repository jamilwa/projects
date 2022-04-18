import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllIdeaComponents = () => {

    const ideas = useSelector((state) => state.allIdeas.ideas);
    const renderList1 = ideas.map((idea) => {
    const {id, ideaTitle, ideaDescription, ideaStorypoints} = idea;


        return(        
        <div className="four wide column" style={{marginBottom: "25px", marginTop: '10px'}} key={id}>
        
            <Link to={{pathname:`/repository/${id}`, state: {id: id, ideaTitle: ideaTitle, ideaDescription: ideaDescription, ideaStorypoints: ideaStorypoints}}}>
            <div className="ui link cards" style={{height: "100%", maxHeight:"150px"}}>
          <div className="card" style={{height: "100%", overflowY: "auto", backgroundColor: 'transparent', border: '2px solid white', borderRadius: '10px'}}>
              <div className="content">
                <div className="description" style={{textAlign: "left", font: "small-caption", fontSize: '17px', color: 'lightgrey'}}><strong style={{color: 'floralwhite'}}>Title: </strong> {ideaTitle}</div>
                <div className="description" style={{textAlign: "left", font: "small-caption", fontSize: '17px', color: 'lightgrey'}}><strong style={{color: 'floralwhite'}}>Description: </strong> {ideaDescription}</div>
                <div className="meta" style={{textAlign: "left", font: "small-caption", fontSize: '17px', color: 'lightgrey'}}><strong style={{color: 'floralwhite'}}>Story points: </strong> {ideaStorypoints}</div>        
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