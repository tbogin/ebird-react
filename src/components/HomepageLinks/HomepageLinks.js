import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './HomepageLinks.scss';
import ListContainer from '../ListContainer/ListContainer';

function HomepageLinks() {
  return (
    <Router>
      <div className="homepage-header">eBird React</div>
      <div className="checklist-start-cta-container">
        <Link to="/listContainer" className="checklist-start-cta">Get Started</Link>
      </div>
      <div className="homepage-btn-container">
        <Link to="/listContainer">
          <button className="homepage-btn"></button>              
        </Link>
      </div>
    </Router> 
  )
}

export default HomepageLinks;