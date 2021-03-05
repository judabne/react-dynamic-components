import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import ResponsiveDrawer from './hoc/ResponsiveDrawer/ResponsiveDrawer'
import Home from './containers/Home/Home'
import Contact from './containers/Contact/Contact'
import Projects from './containers/Projects/Projects'
import Posts from './containers/Posts/Posts'
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Toolbar>PST</Toolbar>
        <ResponsiveDrawer>
            <Switch>
              <Route path="/projects" component={Projects} />
              <Route path="/orders" component={Contact} />
              <Route path="/Posts" component={Posts} />
              <Route path="/" exact component={Home} />

            </Switch>
          
        </ResponsiveDrawer>
      </div>
      
    );
  }
}

export default App;
