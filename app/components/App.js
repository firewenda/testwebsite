import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <Slider />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;