import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBarComponents/NavBar";
import "../css/_app.scss";
import HomePage from "./uniquePages/HomePage";
import Degrees from "./uniquePages/Degrees";
import Resources from "./uniquePages/Resources";
import Faculty from "./uniquePages/Faculty";
import posed, { PoseGroup } from "react-pose";
const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});
const App = () => {
  return (
    <Router>
      <div className="fullPage">
        <div className="header">
          <NavBar />
        </div>

        <Route
          render={({ location }) => (
            <div id="middle">
              <PoseGroup>
                <RouteContainer key={location}>
                  <Switch location={location}>
                    <Route path="/" exact render={HomePage} key="home" />
                    <Route
                      path="/degreescourses"
                      exact
                      render={Degrees}
                      key="degrees"
                    />
                    <Route
                      path="/resources"
                      exact
                      render={Resources}
                      key="resources"
                    />
                    <Route
                      path="/faculty"
                      exact
                      render={Faculty}
                      key="faculty"
                    />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            </div>
          )}
        />

        <div className="footer"></div>
      </div>
    </Router>
  );
};

export default App;
