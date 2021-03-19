import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header/header';
import Whiteboard from './components/whiteboard/whiteboard';
import Home from './components/home/home';

function App() {
  return (
    <>
      <>
        <Router>
          <Header/>
          <Route exact path='/' component={Home}/>
          <Route path='/board' component={Whiteboard}/>
        </Router>
      </>
    </>
  );
}

export default App;
