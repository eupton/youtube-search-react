import React, { Component } from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelected}) => {
    const renderedVideoItems = videos.map((video) => {
        return (
        <VideoItem 
            key={video.id.videoId} 
            video={video} 
            onVideoSelected={onVideoSelected} 
        />);
    });


    return (
        <div className="ui relaxed divided list">
            <h1>Videos</h1>
            {renderedVideoItems}
        </div>
    );

}

export default VideoList