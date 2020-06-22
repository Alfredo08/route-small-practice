import React from 'react';
import Home from './Home';
import Profile from './Profile';
import {Route, Link} from 'react-router-dom';

import './App.css';

class App extends React.Component {
  state = {
    profiles : [{
      username : "adam123",
      age : 30,
      id: 123
    },
    {
      username : "alex456",
      age : 35,
      id: 456
    }]
  };

  render(){
    return (
      <div className="App">
        <h1>
          Welcome to this Router Practice App!
        </h1>
        <Link to="/home">
          Home Page
        </Link>
        <Link to="/profile">
          Profile Page
        </Link>

        <Route path="/home" component={Home} />
        <Route path="/profile/:identifier" render={(routerProps) => <Profile {...this.state} {...routerProps}/>} />
      </div>
    );
  }
}

export default App;
