import React, { useState, useEffect } from 'react'
import './Player.css';
import { useLocation } from 'react-router';
import apiClient from '../../spotify';
import SongCard from '../../Component/SongCard/SongCard';
import Queue from '../../Component/Queue/Queue';
import AudioPlayer from '../../Component/audioPlayer';

const Player = () => {
  const location = useLocation();
  const [tracks,setTracks] = useState([]); //set all tracks
  const [currentTrack, setCurrentTrack] = useState({}); //current track
  const [currentIndex, setCurrentIndex] = useState(0); //play previous and next tracks

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);
  // console.log("tracks")
  //  console.log(tracks);
  //  console.log(tracks.length);

  useEffect(() => {
    // console.log('this is useeffect',tracks.length);
  //  console.log((tracks[0].track));
   setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  return (
    <div className='screen-container flex'>
      <div className='left-player-body'>
       {<AudioPlayer currentTrack={currentTrack}/>}
      </div>
      <div className='right-player-body'>
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}

export default Player;
