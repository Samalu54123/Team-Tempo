import Navbar from "./Navbar"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Home/>
    </>
  )
}

export default App