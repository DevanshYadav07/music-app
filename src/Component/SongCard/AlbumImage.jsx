import React from 'react'
import './AlbumImage.css';
const AlbumImage = ({url}) => {
    console.log(url);
  return (
    <div className='album-image flex'>
        <img src={url} alt='album art' className='albumImage-art' /> 
      <div className='albumImage-shadow'>
        <img src={url} alt='shadow' className='albumImage-shadow' />
      </div>
    </div>
  )
}

export default AlbumImage;
