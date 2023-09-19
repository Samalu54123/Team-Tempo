import Navbar from "./Navbar"
import Project from "./Pages/Project"
import Home from "./Pages/Home"
import About from "./Pages/About"
import SoundLibrary from "./SoundLibrary";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/SoundLibrary" element={<SoundLibrary />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
