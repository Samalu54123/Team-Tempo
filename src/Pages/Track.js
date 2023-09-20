import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import * as Tone from 'tone';
import SoundLibrary from '../SoundLibrary';

class Track extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timelineClips: [], // Array to store added clips
      playbackPosition: 0, // Keep track of playback position (in seconds)
    };

    this.soundInstances = [];
  }

  // Add a clip from the Sound Library to the timeline
  addClipToTimeline = (clipSound) => {
    this.setState((prevState) => ({
      timelineClips: [...prevState.timelineClips, clipSound],
    }));
  };
  
  playTimeline = () => {
    const { timelineClips } = this.state;
  
    if (Howler.ctx.state !== 'running') {
      Howler.ctx.resume(); // Resume the audio context if it's not running
    }
  
    // Clear any existing sound instances
    this.soundInstances.forEach((sound) => sound.unload());
    this.soundInstances = [];
  
    // Define the delay interval between clip playback (in milliseconds)
    const delayInterval = 0;
  
    // Function to play a clip with a delay
    const playClipWithDelay = (index) => {
      if (index < timelineClips.length) {
        const clip = timelineClips[index];
        const sound = new Howl({
          src: [clip.sound],
          volume: 1.0, // Adjust volume as needed
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
  

  render() {
    Howler.volume(1.0); // Set the volume for Howler
    const { timelineClips, playbackPosition } = this.state;

    return (
      <div>
        <h2>Timeline</h2>
        <button onClick={this.playTimeline}>Play Timeline</button>
        <p>Playback Position: {playbackPosition.toFixed(2)} seconds</p>

        <SoundLibrary addClipToTimeline={this.addClipToTimeline} />

        <h3>Timeline Clips</h3>
        {timelineClips.map((clip, index) => (
          <div key={index}>
            {clip.label}
          </div>
        ))}
      </div>
    );
  }
}

export default Track;
