import React from 'react'
import './video-item.css';

const VideoItem = ({video, populateSelectedItem}) => {
  const videoInfo = video.snippet;
  return(
    <div className='item video-item' onClick={e=>populateSelectedItem(video)}>
      <img alt={videoInfo.title} className='ui image' src={videoInfo.thumbnails.default.url}/>
      <div className='content'>
        <h4 className='header'>{videoInfo.title}</h4>
        <hr style={{ borderTop: 'dashed 2px', boderBottom:'none', height: 0 }}/>
        <div className="description">
          <p>{videoInfo.description.slice(0, 50) + '...'}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoItem