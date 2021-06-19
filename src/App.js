import './App.css';
import React from 'react';
import Proyecto2 from './proyecto2'
import Proyecto1 from './proyecto1'
import Proyecto3 from './proyecto3'
import Proyecto4 from './proyecto4'
import Proyecto5 from './proyecto5'
import Cvmafe from './cdmafe'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function App() {
  return (
  <div>

<Router>
    
    <Switch>
          <Route  path="/proyecto1" component={Proyecto1}/>
          <Route  path="/proyecto2" component={Proyecto2}/>
          <Route  path="/proyecto3" component={Proyecto3}/>
          <Route  path="/proyecto4" component={Proyecto4}/>
          <Route  path="/proyecto5" component={Proyecto5}/>
          <Route  path="/" component={Cvmafe}/>
        </Switch>
      
    </Router>

  </div>

    
  );
}

export default App;
