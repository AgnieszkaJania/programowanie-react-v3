import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/home_page';
import { Publications } from './components/Publications/Publications';
import { People } from './components/People/People';
import { Entities } from './components/Entities/Entities';
import { Administration } from './components/Administration/Administration';

function App() {
  return (
    
    <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/Publications" component={Publications}/>
          <Route path="/People" component={People}/>
          <Route path="/Entities" component={Entities}/>
          <Route path="/Administration" component={Administration}/>

        </Switch>
    </Router>
  );
}
export default App;