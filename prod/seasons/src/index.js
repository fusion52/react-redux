import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

// Functional component
// const App = () => {
// };

class App extends React.Component {
  // // NOT RECOMMENDED to data load here!
  // constructor(props) {
  //   // reference to parent constructor
  //   super(props);

  //   // // initialize state, only time of direct assignment
  //   // this.state = { lat: null, errorMessage: '' };
  // }

  // alternate way to initialize!
  state = { lat: null, errorMessage: '' };

  // // Data load here!
  // // Good place to do data-loading!
  // componentDidMount() {
  //   console.log('My component was rendered to the screen');
  // }
  //
  // // Good place to do more data-loading when state/props change
  // componentDidUpdate() {
  //   console.log('My component was just updated - it rerendered!');
  // }
  //
  // // Good place to do cleanup (especially for non-React stuff)
  // componentWillUnmount(){
  //   console.log('My component was just closed!');
  // }

  componentDidMount() {
    console.log('My component was rendered to the screen');

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
