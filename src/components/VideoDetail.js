import React from 'react';

const VideoDetail = ({selectedVideo})=>{
  if(selectedVideo.snippet !== undefined){

  const youTube = 'https://www.youtube.com';
  const embedLink = `${youTube}/embed/${selectedVideo.id.videoId}`
  const playOnYTLink = `${youTube}/${selectedVideo.id.videoId}`

    return(
        <div>
          <div className='ui embed'>
            <iframe title='video-player' src= {embedLink} />
          </div>
          <div className='ui segment'>
            <h4 className='ui header'>{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
            <a target='_blank' rel="noreferrer" href={playOnYTLink}>{playOnYTLink}</a>
          </div>
        </div>
        )
  }
}

export default VideoDetail;