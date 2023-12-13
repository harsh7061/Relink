import React from "react";
import "./HeaderOption.css";
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar } from "@mui/material";
import HeaderOption from "./HeaderOption";
function Widgets() {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  }
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Profiles You May Know</h2>
      </div>
      <div className="profiles">
        <div className="aa">
          <div className="a">
          <HeaderOption Icon={Avatar} title='User1'/>
          <h4>Professor</h4>
          </div>
          <div className="b">
          <HeaderOption Icon={Avatar} title='User2'/>
          <h4>Student</h4>
          </div>
        </div>
        <div className="cc">
          <div className="c">
          <HeaderOption Icon={Avatar} title='User3'/>
          <h4>Professor</h4>
          </div>
          <div className="d">
          <HeaderOption Icon={Avatar} title='User4'/>
          <h4>Student</h4>
          </div>
        </div>
      </div>
      <h2>Top News</h2>
        <InfoIcon />
      {newsArticle ("Harsh Sigh is back", "Top news- 1000 researchers")}
      <div className="widgets__article">
      <div className="widgets__articleLeft">
        
      </div>
      <div className="widgets__articleRight">
        <h4>Harsh Sigh is back</h4>
        <p>Top news- 1000 researchers</p>
      </div>
    </div>
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>Harsh Sigh is back</h4>
        <p>Top news- 1000 researchers</p>
      </div>
    </div>
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>Harsh Sigh is back</h4>
        <p>Top news- 1000 researchers</p>
      </div>
    </div>
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>Harsh Sigh is back</h4>
        <p>Top news- 1000 researchers</p>
      </div>
    </div>
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>Harsh Sigh is back</h4>
        <p>Top news- 1000 researchers</p>
      </div>
    </div>
      </div>
    
  );
}

export default Widgets;
