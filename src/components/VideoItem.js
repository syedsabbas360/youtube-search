import './VideoItem.css'
import React from 'react';
const VideoItem = ({ video , onVideoSelect }) => {
  return(
     <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
        <div className="content">
          <div className="header" style={{width:'135px'}}>
            {video.snippet.title}
          </div>
        </div>
     </div>
  )
}

export default VideoItem;
