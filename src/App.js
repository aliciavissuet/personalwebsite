import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/layout/header';


import Landing from './components/layout/landing';
import Bio from './components/pages/bio';

class App extends Component {
  render() {
    return (
        <div className={"App"}>
        <Header/>
            {/*<Router>*/}
            {/*<div className="App">*/}
            <Route exact path="/" component={Landing} />
            {/*<Header/>*/}
            {/*<div className="container">*/}
            <Route exact path="/bio" component={Bio} />
            {/*/!*<Route exact path="/resume" component={Resume} />*!/*/}
            {/*/!*<Route exact path="/contact" component={Contact} />*!/*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</Router>*/}
        </div>

    )

  }
}

export default App;
