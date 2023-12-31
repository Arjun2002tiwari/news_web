import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <News key="general" pagesize={6} country="in" category="general" />
          </Route>
          <Route exact path="/bussiness">
            <News key="business" pagesize={6} country="in" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" pagesize={6} country="in" category="entertainment" />
          </Route>
          <Route exact path="/general">
            <News key="general" pagesize={6} country="in" category="general" />
          </Route>
          <Route exact path="/health">
            <News key="health" pagesize={6} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" pagesize={6} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" pagesize={6} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" pagesize={6} country="in" category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;