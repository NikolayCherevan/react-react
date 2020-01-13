import React from "react";
import "./App.css";

import { Route, Router} from "react-router-dom";
import SiderDemo from "./Containers/Content/Content";
import AboutMe from "./Containers/Dashboard/AboutMe";
import Contacts from "./Containers/Dashboard/Contacts";
import Home from "./Containers/Dashboard/Contacts";
import MyProjects from "./Containers/Dashboard/MyProjects";
import Reviews from "./Containers/Dashboard/Reviews";

import * as path from "../../react-react/src/Constants/routes";
import NotFound from "./Containers/Dashboard/NotFound";
import { Switch} from "react-router-dom";
import { createBrowserHistory } from "history";

export const history =  createBrowserHistory(); 

const App = () => {

  return (
    <Router  history={history} >

        <SiderDemo>
          <Switch>
            <Route exact={true} path={path.HOME} render={Home} />
            <Route exact={true} path={path.ABOUT} render={AboutMe} />
            <Route exact={true} path={path.CONTACTS} render={Contacts} />
            <Route exact={true} path={path.PROJECTS} render={MyProjects} />
            <Route exact={true} path={path.REVIEWS} render={Reviews} />
            <Route exact={true} component={NotFound} />
          </Switch>
        </SiderDemo>

    </Router>
  );
};

export default App;
