import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import App from "../App";
import ForgotPassword from "./ForgotPassword.js";
import Project from "../Pages/Project"
import Home from "../Pages/Home"
import About from "../Pages/About"
import SoundLibrary from "../SoundLibrary";
import Track from "../Pages/Track";

function PasswordLoginWithFirebase(){
    return(
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/App" element={<App/>}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/Project" element={<Project />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/SoundLibrary" element={<SoundLibrary />} /> 
                    <Route path="/Track" element={<Track />} /> 
                    <Route path="/reset" element={<ForgotPassword/>} />
                </Routes>
            </div>
    )
}
export default PasswordLoginWithFirebase;