import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// Functional component
// const App = () => {
// };

class App extends React.Component {
  constructor(props) {
    // reference to parent constructor
    super(props);

    // initialize state, only time of direct assignment
    this.state = { lat: null, errorMessage: '' };

    // may take 3-4 seconds to get location.
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        // call setState, render screen again.
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
