import React, { Component } from 'react';
import { Howl } from 'howler';
import SoundLibrary from '../SoundLibrary'; // Import the SoundLibrary component
import Timeline from '../TimelineComponent';

class Track extends Component {
  render() {
    return (
      <div className="Track">
        {/* Button to toggle the SoundLibrary dropdown */}
        <button onClick={this.handleDropdownToggle}>Open Sound Library</button>
        {/* SoundLibrary dropdown */}
        {this.state.isDropdownOpen && (
          <div>
            <SoundLibrary/>
          </div>
        )}
      </div>
    );
  }

  state = {
    isDropdownOpen: false,
  };

  // Toggle the SoundLibrary dropdown
  handleDropdownToggle = () => {
    this.setState((prevState) => ({ isDropdownOpen: !prevState.isDropdownOpen }));
  };
}

export default Track;
