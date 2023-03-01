import React from 'react';
import "./audioPlayer.css";
import ProgressCircle from './progressCircle';

export default function AudioPlayer(currentTrack) {
  return (
    <div className='player-body'>
        <div className='player-left-body'>
            <ProgressCircle
                percentage={75}
                isPlaying={true}
                size={300}
                color="#C96850"
                //image={currentTrack.images.length>0?<img src={currentTrack.images[0].url}    solve this error to get image of current track in the center
                 //alt="current track"/>:<div>no image</div
               />
        </div>
        <div className='player-right-body'></div>
    </div>
  )
}
