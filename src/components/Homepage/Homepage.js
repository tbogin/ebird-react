import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import ListContainer from '../ListContainer/ListContainer';

import './Homepage.scss';
//Homepage provides a link to a new checklist

function Homepage() {
  return (
    <Router>
      <div className="Homepage">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="homepage-header">eBird React</div>
            <div className="checklist-start-cta-container">
              <Link to="/listContainer#new-list" className="checklist-start-cta">
                Get Started
              </Link>
            </div>
            <div className="homepage-btn-container">
              <Link to="/listContainer#new-list">
                <button className="homepage-btn"></button>              
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/listContainer">
          <ListContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default Homepage;