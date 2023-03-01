import React from 'react'
import './Queue.css';
const Queue = ({tracks, setCurrentIndex}) => {
  console.log(tracks);
  return (
    <div className='queue-container'>
      <div className='queue flex'>
        <p className='upNext'>UpNext</p>
        <div className='queue-list'>
          {tracks.map((track,index) => (
            <div className='queue-item flex' onClick={()=>setCurrentIndex(index)}>
              <p className='track-name'>{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
}

export default Queue
