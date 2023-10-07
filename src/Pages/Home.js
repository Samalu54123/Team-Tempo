import React from "react";
import { signOut } from "firebase/auth";
import { database } from "../PasswordLoginWithFirebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import Navbar from "../Navbar"

function HomeScreen() {
  const history = useNavigate();

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
    <div>
      <Navbar />

        <div className="home-container">
          <header className="header">
            <h1>Welcome to TeamTempo</h1>
          </header>
          <main className="main-content">
            <section className="feature-section">
              <h2>Features</h2>
              <ul>
                <li>Create and compose your own music</li>
                <li>Collaborate with other musicians</li>
                <li>Access a library of musical instruments</li>
                <li>Record and produce your tracks</li>
              </ul>
            </section>
            <section className="action-buttons">
              <button className="primary-button" onClick={handleSignOut}>
                Sign Out
              </button>
            </section>
          </main>
          <footer className="footer">
            <p>&copy; 2023 TeamTempo</p>
          </footer>
        </div>

    </div>
  );
}

export default HomeScreen;
