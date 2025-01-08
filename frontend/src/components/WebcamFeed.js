// src/components/WebcamFeed.js
import React from 'react';

const WebcamFeed = () => {
    return (
        <div>
            <h2>Webcam Feed</h2>
            <img src="http://localhost:5000/video_feed" alt="Webcam Feed" style={{ width: '100%' }} />
        </div>
    );
};

export default WebcamFeed;
