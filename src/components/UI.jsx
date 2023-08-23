import React from "react";

const UI = () => {
  return (
    <div id="main">
      <div id="top">
        <img src="./gt_logo.png" alt="Gran Turismo logo" />
        <div id="name">
          <p>Made by Jason Dichoso with React-Three-Fiber.</p>
          <p>Migrated from Three.js & Vanilla JS.</p>
        </div>
      </div>
      <div id="logo">
        <img src="./maserati_logo.png" alt="Maserati logo" />
      </div>
      <div id="car">
        <div id="manufacturer">
          <h2>MASERATI</h2>
          <h1>GHIBLI GT</h1>
          <h2>2022</h2>
        </div>
      </div>
      <div id="car-details">
        <div id="detail">
          <p>Displacement</p>
          <div id="detail-number">
            <p>2979 cc</p>
          </div>
        </div>
        <div id="detail">
          <p>Max. Power</p>
          <div id="detail-number">
            <p>345 BHP @ 5,000 rpm</p>
          </div>
        </div>
        <div id="detail">
          <p>Max. Torque</p>
          <div id="detail-number">
            <p>369 lb⋅ft @ 1,750 rpm</p>
          </div>
        </div>
        <div id="detail">
          <p>Drivetrain</p>
          <div id="detail-number">
            <p>FR</p>
          </div>
        </div>
        <div id="detail">
          <p>Length</p>
          <div id="detail-number">
            <p>4,971 mm</p>
          </div>
        </div>
        <div id="detail">
          <p>Width</p>
          <div id="detail-number">
            <p>1,945 mm</p>
          </div>
        </div>
        <div id="detail">
          <p>Height</p>
          <div id="detail-number">
            <p>1,461 mm</p>
          </div>
        </div>
        <div id="detail">
          <p>Weight</p>
          <div id="detail-number">
            <p>1,810 kg</p>
          </div>
        </div>
      </div>
      <div id="car-class">
        <p>N400</p>
      </div>
      <div id="car-price">
        <p>
          <span className="currency">Cr.</span> 125,000
        </p>
      </div>
      <div id="slider">
        <div className="text">
          The Maserati Ghibli's legacy is a blend of decades of automotive
          expertise, characterized by a dedication to performance, elegance, and
          innovation. Inspired by the Sahara's forceful winds, the Ghibli name
          captures its dynamic essence. Evolving from its classic design with a
          long hood and angular lines, the Ghibli's modern incarnation fuses
          timeless cues with contemporary aesthetics. Throughout generations, it
          has consistently delivered potent powertrains and advanced technology,
          embodying the Gran Turismo spirit on road and track. Embracing
          innovation, the Ghibli remains at the forefront of technology with
          advanced infotainment and driver assistance systems. From its
          pioneering origins to its present-day embodiment of heritage and
          modernity, the Maserati Ghibli continues to define automotive
          excellence.
        </div>
      </div>
    </div>
  );
};

export default UI;
