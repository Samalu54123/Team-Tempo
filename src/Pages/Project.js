import React from 'react';
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <div>
      <h1>Project</h1>

      {/* Add a link to the SoundLibrary */}
      <Link to="/SoundLibrary">Go to Sound Library</Link>
    </div>
  );
}
