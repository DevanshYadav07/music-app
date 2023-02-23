import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import SidebarButton from "./SidebarButton";
import apiClient from "../spotify";
const Sidebar = () => {
  // set users image;
  // setting state for image
  const [image, setImage] = useState(
    "https://images.pexels.com/photos/5327610/pexels-photo-5327610.jpeg?auto=compress&cs=tinysrgb&w=600"
  );

  // setting users image
  useEffect(() => { 
    apiClient.get("me").then((response) => {
      // setting users image
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="Sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favourites"
          to="/favorities"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
