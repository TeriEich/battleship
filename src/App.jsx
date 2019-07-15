import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import HUD from './HUD.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HUD />
      </div>
    );
  }
}
export default App;
