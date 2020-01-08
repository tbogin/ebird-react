import React from 'react';
import './ListContainer.scss';
import Map from '../Map/Map';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewChecklist from '../NewChecklist/NewChecklist';

//List asks for and determines your location
//With location, list begins timing, and presents you with birds seen nearby (use ebird api?)
function ListContainer() {
  return (
    <div className="ListContainer" id="new-list">
      <div className="row">
        <div className="col">
          <Router>
            <Link to="/newChecklist" className="proceed-new-checklist">Start a new checklist</Link>
            <Route path="/newChecklist" component={NewChecklist}>
              <NewChecklist />
            </Route>
          </Router>
        </div>
      </div>
      {/* <Map /> */}
    </div>
  );
}

export default ListContainer;