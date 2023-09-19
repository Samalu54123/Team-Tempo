import {Component} from 'react';
import { Howl, Howler } from 'howler';
import A3 from "./Test sound/a3.wav";
import B3 from "./Test sound/b3.wav";
import C3 from "./Test sound/c3.wav";
import D3 from "./Test sound/d3.wav";
import E3 from "./Test sound/e3.wav";
import F3 from "./Test sound/f3.wav";

//import the sound clips
const pianoClips = [
    {sound: A3, label: 'A3'},
    {sound: B3, label: 'B3'},
    {sound: C3, label: 'C3'},
    {sound: D3, label: 'D3'},
    {sound: E3, label: 'E3'},
    {sound: F3, label: 'F3'}
]

class SoundLibrary extends Component
{
    //play function
    PlaySound=(src)=>
    {
        const sound = new Howl({src})
        sound.play();
    }

    //creates a button per sound clip
    SoundFunction = () => 
    {
        //maps out the clips
        return pianoClips.map((soundOBJ, Home) => {
        return(
            //creates a button per sound clip
            <button key={Home} onClick={() => this.PlaySound(soundOBJ.sound)}>
            {soundOBJ.label}
            </button>
        )
        })
    }

    //sets volume at 1 default
    render()
    {
        Howler.volume(1.0)
        return(
            <div className='Sounds'>
                {this.SoundFunction()}
            </div>
        )
    }
}

export default SoundLibrary;