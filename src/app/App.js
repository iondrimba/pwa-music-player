import React, { Component } from 'react';
import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import styles from './style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="shell">
            <Route path="/" exact component={Home} />
            <Route path="/List" exact component={List} />
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
