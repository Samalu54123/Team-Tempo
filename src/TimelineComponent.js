import React from "react";
import a3 from "./Test sound/a3.wav";
import * as Tone from 'tone'

function Timeline()
{
  const synth = new Tone.Synth().toDestination();

  const handleclick = () =>
  {
    if(Tone.context.state != "running")
    {
      Tone.start();
    }
    synth.triggerAttackRelease("c3", "1n", );
  };

  return(
    <div>
      <button onClick={handleclick}>play</button>
    </div>
  );
}

export default Timeline;