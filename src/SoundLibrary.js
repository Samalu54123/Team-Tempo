import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import './Track.css'
import A3 from "./Test sound/a3.wav";
import B3 from "./Test sound/b3.wav";
import C3 from "./Test sound/c3.wav";
import D3 from "./Test sound/d3.wav";
import E3 from "./Test sound/e3.wav";
import F3 from "./Test sound/f3.wav";
import G3 from "./Test sound/g3.wav";
import BasicTone from "./Test sound/basic_tone.wav";
import BasicPowerOn from "./Test sound/bass-poweron.wav";
import BassRolly from "./Test sound/bass-rolly-down.wav";
import BassSynth from "./Test sound/bass-synth.wav";
import HardSweep from "./Test sound/hardsweep2.wav";
import Organ from "./Test sound/organ.wav";
import Metal from "./Test sound/metal.wav";
import Bass from "./Test sound/808-bass.wav";

const pianoClips = [
    { sound: A3, label: 'Piano A3' },
    { sound: B3, label: 'Piano B3' },
    { sound: C3, label: 'Piano C3' },
    { sound: D3, label: 'Piano D3' },
    { sound: E3, label: 'Piano E3' },
    { sound: F3, label: 'Piano F3' },
    { sound: G3, label: 'Piano G3' },
    { sound: BasicTone, label: 'Basic Tone'},
    { sound: BasicPowerOn, label: 'Basic PowerOn'},
    { sound: BassRolly, label: 'Bass Rolly'},
    { sound: BassSynth, label: 'Bass Synth'},
    { sound: HardSweep, label: 'Hard Sweep'},
    { sound: Organ, label: 'Organ'},
    { sound: Metal, label: 'Metal'},
    { sound: Bass, label: '808-Bass'}
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
            <div className='Sound-Library'>
                <h3>Sound Library</h3>
                <div className='Sounds'>
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
            </div>
        );
    }
}

export default SoundLibrary;
