import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar"

export default function Project() {
  return (
    <div>
      <Navbar />
      <h1>Project</h1>

      {/* Add a link to the SoundLibrary */}
      <Link to="/SoundLibrary">Go to Sound Library</Link>
    </div>
  );
}
