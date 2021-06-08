import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/home_page';
import { Publications } from './components/Publications/Publications';
import { People } from './components/People/People';
import { Entities } from './components/Entities/Entities';
import { Administration } from './components/Administration/Administration';
import { ClientContract } from './components/ClientContract/clientContract';
import { Ecosystem } from './components/Ecosystem/Ecosystem';
import { SupplierContract } from './components/SupplierContact/SupplierContract';
import { Corporate } from './components/Corporate/Corporate';
import { GroupNorms } from './components/groupNorms/groupNorms';
import { RealEstateContracts } from './components/RealEstateContracts/RealEstateContracts';
import { Profile } from './components/Profile/profile';
import {WorkspaceSolo} from './components/WorkspaceSolo/workspaceSolo';
import BasePage from './components/BasePage/BasePage';
import { Settings } from './components/Settings/settings';
import { Privacy } from './components/Settings/privacy';
import { Logout } from './components/Settings/logout';

function App() {
  return (
      <Router>
    <BasePage>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/Publications" component={Publications}/>
            <Route path="/People" component={People}/>
            <Route path="/Entities" component={Entities}/>
            <Route path="/Administration" component={Administration}/>
            <Route path="/clientContract" component={ClientContract}/>
            <Route path="/Ecosystem" component={Ecosystem}/>
            <Route path="/Entities" component={Entities}/>
            <Route path="/SupplierContract" component={SupplierContract}/>
            <Route path="/Corporate" component={Corporate}/>
            <Route path="/GroupNorms" component={GroupNorms}/>
            <Route path="/RealEstateContracts" component={RealEstateContracts}/>
            <Route path="/WorkspaceSolo" component={WorkspaceSolo}/>
            <Route path="/Settings" component={Settings}/>
            <Route path="/Privacy" component={Privacy}/>
            <Route path="/Logout" component={Logout}/>
            <Route path="/profile" exact component={Profile}/>
          </Switch>
    </BasePage>
      </Router>
  );
}
export default App;