import React from 'react';

import ReactDOM from 'react-dom';
import Season from './seasonDisplay';
import Spinner from './spinner';
// const App = ()=>{
//    const stat = useState(null);
//
//   window.navigator.geolocation.getCurrentPosition(
//     position => setStat(position.coords.latitude);
//     error => console.log(error)
//   );
//   return <div>Latitude: </div>;
// } // functional component has some limitation


class App extends React.Component {


  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <Season lat= {this.state.lat}/>;
    }
    return <div><Spinner message={"Please accept location request"}/></div>;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));