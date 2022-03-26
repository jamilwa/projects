import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header1 from "./Header1";

const IdeaComponents = () => {

    const ideas = useSelector((state) => state.allIdeas.ideas);
    const renderList = ideas.map((idea) => {
        const {id, ideaTitle, ideaDescription, ideaStorypoints} = idea;
        return(        
        <div className="four wide column" key={id}>
        <Header1 />
        <hr/>
        <Link to={`/idea/${id}`}>
        <div className="ui link cards" style={{maxHeight:"350px", height: "100%", overflowY:"auto"}}>
          <div className="orange card">
              <div className="content">
                <div className="header">Title: {ideaTitle}</div>
                <div className="description"><strong>Description: </strong> {ideaDescription}</div>
                <div className="meta">Story points: {ideaStorypoints}</div>        
                </div>
              </div>
            </div>
            </Link>
          
          </div>
        
          );
    });

    return <>{renderList}</>;
};

export default IdeaComponents;