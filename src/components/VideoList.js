import React from 'react';
import VideoItem from './VideoItem';

const VideoList = function({videoList, populateSelectedItem}){

  const renderedVideos = videoList.map((video)=>{
    return (
      < VideoItem 
        video = {video} 
        key={video.id.videoId} 
        populateSelectedItem = {populateSelectedItem}
      />
    )
  })

  return <div className='ui relaxed divided list'>{renderedVideos}</div>
}
  




export default VideoList;