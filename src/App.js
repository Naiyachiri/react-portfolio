import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Springboard from './components/Springboard';
import Matboard from './components/matboard';
import Nav from './view/Nav';
import './App.css';
import './responsive.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Springboard}/>
          <Route exact path={process.env.PUBLIC_URL + '/matboard'} component={Matboard}/>
        </main>
      </div>
    );
  }
}

export default App;
