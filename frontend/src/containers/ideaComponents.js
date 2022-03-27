import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header1 from "./Header1";

const IdeaComponents = () => {

    const history = useHistory();
    const ideas = useSelector((state) => state.allIdeas.ideas);

    
    const renderList = ideas.map((idea) => {
        const {id, ideaTitle, ideaDescription, ideaStorypoints} = idea;
        return(        
        <div className="four wide column" key={id}>
        <Header1 />
        <Link to={`/idea/${id}`}>
        <div className="ui link cards" style={{maxHeight:"350px", overflowY:"auto"}}>
          <div className="card">
              <div className="content">
                <div className="description" style={{fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Title: </strong> {ideaTitle}</div>
                <div className="description" style={{fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}><strong>Description: </strong> {ideaDescription}</div>
                <div className="meta" style={{fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}>Story points: {ideaStorypoints}</div>        
                </div>


              </div>
            </div>
            </Link>
            <Link to={`/idea/update/${id}`}>
            <button className="ui animated button" tableindex="0">
            <div className="visible content">Edit</div>
            <div className="hidden content">
                <i className="edit icon"></i></div>
            </button>
            </Link>
            <Link to={`/idea/delete/${id}`}>
            <button className="ui animated button" style={{color:"red"}} tableindex="0">
            <div className="visible content">Delete</div>
            <div className="hidden content">
                <i className="trash alternate outline icon"></i></div>
            </button>
            </Link>
          </div>
        
          );
    });

    return <>{renderList}</>;
};

export default IdeaComponents;