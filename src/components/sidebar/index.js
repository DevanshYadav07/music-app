import React from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
        <img src="https://cdn.shopify.com/s/files/1/0331/3693/5043/products/20221002_230628-min.jpg?v=1664910735&width=1100" 
        className="profile-img"
         alt='profile'/>
         <div>
            <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
            <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
            <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
            <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite/>}/>
            <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
         </div>
         <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}
