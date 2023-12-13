import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="http://c93fea60bb98e121740fc38ff31162a8.s3.amazonaws.com/wp-content/uploads/2017/03/relink.jpg" alt=""/>

        <div className="header__search">
          <SearchIcon/>
          <input type="text"/>
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={GroupsIcon} title='Connect'/>
        <HeaderOption Icon={WorkIcon} title='Research'/>
        <HeaderOption Icon={MessageIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notification'/>
        <HeaderOption Icon={EventIcon} title='Events' />
        <div className='hey'>
        <HeaderOption avatar="http://www.pixelstalk.net/wp-content/uploads/2016/08/Cool-Nature-Background-Images-4523x2590.jpg" title="You" />
        <div className='happy'>
        <h2>Vit Bhopal</h2>
        <p>Student</p>   
        </div>     
        </div>
      </div>
    </div>
  )
}

export default Header
