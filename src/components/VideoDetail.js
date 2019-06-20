import React from 'react';

const VideoDetail = ({ video }) => {

  if(!video){
    return(
      <div>Loading...</div>
    )
  }

//using back ticks from es15 allows us to dynamically add video unique id
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
      <h4 className="ui header">{video.snippet.title}</h4>
      <p className="ui description">{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
