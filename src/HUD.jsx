import React from 'react';

function HUD(props) {

  return (
    <footer className="hud">
      <input className="hud-controls"
        type="text"
        name="attackCoordinates"
        placeholder={"coordinates"} />
    </footer>
  );
}

export default HUD;