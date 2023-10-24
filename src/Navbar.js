import React from "react";
import { Link, useNavigate, useMatch, useResolvedPath } from "react-router-dom";
import { signOut } from "firebase/auth"; // Import signOut
import { database } from "./PasswordLoginWithFirebase/FirebaseConfig"; // Import database

export default function Navbar() {
  const history = useNavigate();

  // Function to handle sign out
  const handleSignOut = () => {
    signOut(database)
      .then(() => {
        console.log("User signed out successfully");
        history("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <nav className="nav">
      <Link to="/Home" className="site-title">
        Team Tempo
      </Link>
      <ul>
        <CustomLink to="/Player">Player</CustomLink>
        <CustomLink to="/Track">Track</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        {/* Sign out button */}
        <li>
          <button className="sign-out-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
