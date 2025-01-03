import React from "react";
import bicycle from "./assets/bicycle.png";
import "./styles.css";

function App() {
  return (
    <>
      {/* <h1>Hello World</h1>
      <p style={{ backgroundColor: "yellow" }}>
        Welcome to our first React app
      </p>
      <img src={bicycle} alt="bicycle" /> */}
      <header>
        <nav>
          <div className="logo">Wanderlust</div>
          <ul>
            <li>Destinations</li>
            <li>Packages</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world with our curated travel experiences</p>
          <button className="cta-button">Start Planning</button>
        </section>

        <section id="destinations" className="destinations">
          <h2>Popular Destinations</h2>
          <div className="destination-grid">
            <div className="destination-card">
              <img src={bicycle} alt="bicycle" />
              <h3>Mountain Escape</h3>
              <p>Breathtaking views and adventure await</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
