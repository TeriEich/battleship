import React from 'react';

function HUD(props) {

  return (
    <footer className="hud">
      <div className="hud-ship-list">
        <h2>Your Ships:</h2>
      </div>
      <div className="hud-controls">
        <h2>Attack!</h2>
        <input
          type="text"
          name="attackCoordinates"
          placeholder={"coordinates"}
        />
      </div>
      <div className="hud-turn-info">
        <h2>Turn Info:</h2>
        <h3>Turn Number [5]</h3>
        <h3>[Player 2] is deciding where to attack.</h3>
      </div>
    </footer>
  );
}

export default HUD;