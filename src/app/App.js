import React, { Component } from 'react';
import Home from '../pages/Home/Home';
import styles from './style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="shell">
          <Router>
            <Route path="/" exact component={Home} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
