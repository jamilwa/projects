import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";

const IdeaComponents = () => {

    const ideas = useSelector((state) => state.allIdeas.ideas);
    const renderList = ideas.map((idea) => {
        const {id, ideaTitle, ideaDescription, ideaStorypoints} = idea;
        return(        
        <div className="four wide column" key={id}>
        <Header />
        <Link to={`/idea/${id}`}>
        <div className="ui link cards">
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