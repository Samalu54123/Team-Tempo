import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import * as Tone from 'tone';
import A3 from "./Test sound/a3.wav";
import B3 from "./Test sound/b3.wav";
import C3 from "./Test sound/c3.wav";
import D3 from "./Test sound/d3.wav";
import E3 from "./Test sound/e3.wav";
import F3 from "./Test sound/f3.wav";

const pianoClips = [
    { sound: A3, label: 'piano A3' },
    { sound: B3, label: 'B3' },
    { sound: C3, label: 'C3' },
    { sound: D3, label: 'D3' },
    { sound: E3, label: 'E3' },
    { sound: F3, label: 'F3' }
];

class SoundLibrary extends Component {
    constructor(props) {
        super(props);
        this.draggedClip = null;
    }

    // Play function
    playSound = (src) => {
        const sound = new Howl({ src });
        sound.play();
    }

    // Handle the drag start event
    handleDragStart = (event, clip) => {
        event.dataTransfer.setData('clip', JSON.stringify(clip));
        this.draggedClip = clip;
    }

    // Add a clip from the Sound Library to the Timeline
    addToTimeline = (clip) => {
        this.props.addClipToTimeline(clip);
    }

    render() {
        Howler.volume(1.0); // Set the volume for Howler

        return (
            <div className='Sounds'>
                <h3>Sound Library</h3>
                {pianoClips.map((soundOBJ, index) => (
                    <div key={index}>
                        <button
                        draggable="true"
                        onDragStart={(e) => this.handleDragStart(e, soundOBJ)}
                        onClick={() => this.playSound(soundOBJ.sound)}
                        >
                        {soundOBJ.label}
                        </button>
                        <button onClick={() => this.addToTimeline(soundOBJ)}>
                            Add to Timeline
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default SoundLibrary;
