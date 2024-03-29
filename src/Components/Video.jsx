import React, { useState } from 'react';
import '../Styling/Video.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const videoUrls = [
  'https://www.youtube.com/embed/vYpB3kf3ExM',
  'https://www.youtube.com/embed/6iW-yc-g7ns',
  'https://www.youtube.com/embed/BX9UkVoGRj8',
  'https://www.youtube.com/embed/Mb2xtx5VmTU',
  'https://www.youtube.com/embed/fdJA117cOd4'
];

export default function Video() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  return (
    <div className="video-container">
        <div className="video-arrow1">
            <span className="arrow" onClick={handlePrevVideo}><ArrowBackIosIcon /></span>
        </div>

        <iframe
            title={`YouTube Video ${currentVideoIndex + 1}`}
            src={videoUrls[currentVideoIndex]}
            frameBorder="0"
            allowFullScreen
            className="video-iframe"
        ></iframe>

        <div className="video-arrow2">
            <span className="arrow" onClick={handleNextVideo}><ArrowForwardIosIcon /></span>
        </div>

        <div className="video-title">
            {currentVideoIndex === 0 && "COOPER T - ORIGINAL"}
            {currentVideoIndex === 1 && "COOPER T - SCARED"}
            {currentVideoIndex === 2 && "COOPER T - GETTIN' IN THE WAY"}
            {currentVideoIndex === 3 && "COOPER T - BEST OF YOU"}
            {currentVideoIndex === 4 && "COOPER T FEAT. EVABEE - OUTSIDE LOOKING IN"}
        </div>
    </div>
  );
}
