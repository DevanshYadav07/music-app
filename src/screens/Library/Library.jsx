import React from "react";
import APIKit from "../../spotify";
import { useState, useEffect } from "react";

import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./library.css";
import { useNavigate } from "react-router-dom";
const Library = () => {
  // setting state for playlist (initialise as null)
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data);
    });
  }, []);

  const navigate=useNavigate();
  // playing  function  storing anonymus function in variable 
  const playPlaylist=(id)=>{
    // taking the clicked playlist to player 
    navigate('/Player', {state:{id:id}});
  }

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          // using ()as it;s a single return statement
          <div className="playlist-card" key={playlist.id}  onClick={()=>playPlaylist(playlist.id)}>
            <img
              src={playlist.images[0].url}
              alt="playlist "
              className="playlist-image"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total}Songs</p>
            {/* adding play button */}
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "30px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
