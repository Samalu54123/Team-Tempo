import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import SoundLibrary from '../SoundLibrary';
import '../Track.css';
import Navbar from "../Navbar"

class Track extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timelineClips: [], // Array to store added clips
      playbackPosition: 0, // Keep track of playback position (in seconds)
      playbackSpeed: 1.0, // Default playback speed
    };

    this.soundInstances = [];
  }

  // Add a clip from the Sound Library to the timeline
  addClipToTimeline = (clipSound) => {
    this.setState((prevState) => ({
      timelineClips: [...prevState.timelineClips, clipSound],
    }));
  };

  // Handle change playback speed
  handleSpeedChange = (event) => {
    const speed = parseFloat(event.target.value);
    this.setState({ playbackSpeed: speed });
  };

  // Play the timeline
  playTimeline = () => {
    const { timelineClips, playbackSpeed } = this.state;

    if (Howler.ctx.state !== 'running') {
      Howler.ctx.resume(); // Resume the audio context if it's not running
    }

    // Clear any existing sound instances
    this.soundInstances.forEach((sound) => sound.unload());
    this.soundInstances = [];

    // Define the delay interval between clip playback (in milliseconds)
    const delayInterval = 200; // 200 milliseconds (0.2 seconds)

    // Function to play a clip with a delay
    const playClipWithDelay = (index) => {
      if (index < timelineClips.length) {
        const clip = timelineClips[index];
        const sound = new Howl({
          src: [clip.sound],
          volume: 1.0, // Adjust volume as needed
          rate: playbackSpeed, // Set the playback speed
          onend: () => {
            setTimeout(() => {
              // Play the next clip with the next index after the delay
              playClipWithDelay(index + 1);
            }, delayInterval);
          },
        });

        // Add the sound instance to the array
        this.soundInstances.push(sound);

        sound.play();
      }
    };

    playClipWithDelay(0);
  };

  // Handle the "Undo" action
  undoLastClip = () => {
    const { timelineClips } = this.state;
    if (timelineClips.length > 0) {
      const updatedTimeline = [...timelineClips];
      updatedTimeline.pop(); // Remove the last clip
      this.setState({ timelineClips: updatedTimeline });
    }
  };

  render() {
    Howler.volume(1.0); // Set the volume for Howler
    const { timelineClips, playbackPosition, playbackSpeed } = this.state;

    return (
      
      // Add a div with a class name for styling
      <div>
        <Navbar />
        <div className="track-container">
          <h2>Timeline</h2>
          <div className="timeline-header">
            {/* Playback controls */}
            <div className="playback-controls">
              <button onClick={this.playTimeline}>Play Timeline</button>
            </div>
            <div className="playback-speed">
              {/* Playback speed dropdown */}
              <label className="playback-speed-label">Playback Speed:</label>
              <select
                className="playback-speed-select"
                onChange={this.handleSpeedChange}
                value={playbackSpeed}
              >
                <option value={1.0}>Normal</option>
                <option value={0.5}>Half Speed</option>
                <option value={1.5}>1.5x Speed</option>
                <option value={2.0}>Double Speed</option>
              </select>
            </div>
            <div className="undo-button">
              {/* Undo button */}
              <button onClick={this.undoLastClip}>Undo</button>
            </div>
          </div>

          <SoundLibrary addClipToTimeline={this.addClipToTimeline} />

          {/* Timeline Clips */}
          <div className="timeline-clips">
            {timelineClips.map((clip, index) => (
              <div key={index} className="timeline-clip">
                {clip.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Track;
