import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
function Sidebar() {

  const recentItem = (topic) => (
    
  <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
  </div>
  )

  return ( 
  <div className="sidebar">
    <div className="sidebar__top">
      <img src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Cool-Nature-Background-Images-4523x2590.jpg" alt=""/>
      <Avatar className='sidebar__avatar' />
      <h2>Harsh Singh</h2>
      <h4>harsh.singh@gmail.com</h4>
    </div>

    <div className="sidebar__stats">
      <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">
          54
        </p>
      </div>
      <div className="sidebar__stat">
      <p>Views on Post</p>
        <p className="sidebar__statNumber">
          48
        </p> 
      </div>
    </div>
    <div className="sidebar__bottom">
      <p>Recent</p>
      {recentItem('Human Computer Interaction')}
      {recentItem('Research in blockchain')}
      {recentItem('softwareengineering')}
      {recentItem('design')}
      {recentItem('developer')}
    </div>
  </div>
  );

}

export default Sidebar
