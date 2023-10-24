import React, { useState, useRef } from 'react';
import Navbar from '../Navbar';

export default function Player() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioFileInput = useRef(null);

  const playPauseToggle = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    // Update the current time of the audio as it plays
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleDurationChange = () => {
    // Update the total duration of the audio file
    setDuration(audioRef.current.duration);
  };

  const handleSkipForward = () => {
    // Skip forward 10 seconds
    audioRef.current.currentTime += 10;
  };

  const handleSkipBackward = () => {
    // Skip backward 10 seconds
    audioRef.current.currentTime -= 10;
  };

  const handleSeek = (e) => {
    // Handle user seeking in the audio
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleFileChange = () => {
    // Handle when the user selects a different audio file
    const selectedFile = audioFileInput.current.files[0];
    if (selectedFile) {
      audioRef.current.src = URL.createObjectURL(selectedFile);
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Player</h1>
      {/* Input for selecting an audio file */}
      <input type="file" accept=".mp3" ref={audioFileInput} onChange={handleFileChange} />
      {/* The audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onEnded={() => setIsPlaying(false)}
      />
      <div>
        {/* Control buttons */}
        <button onClick={handleSkipBackward}>Skip Backward</button>
        <button onClick={playPauseToggle}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleSkipForward}>Skip Forward</button>
      </div>
      <div>
        {/* Display current time */}
        <p>Current Time: {currentTime.toFixed(2)} seconds</p>
      </div>
      <div>
        {/* Seek bar for changing the playback position */}
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
        />
      </div>
    </div>
  );
}
