import React from "react";
import "./App.css";

import { Route, Router} from "react-router-dom";
import SiderDemo from "./Containers/Content/Content";
import AboutMe from "./Containers/Dashboard/AboutMe";
import Flows from "./Containers/Dashboard/Flows";
import Home from "./Containers/Dashboard/Home";
import CreateFlow from "./Containers/Dashboard/CreateFlow";
import Settings from "./Containers/Dashboard/Settings";

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
            <Route exact={true} path={path.FLOWS} render={Flows} />
            <Route exact={true} path={path.CREATEFLOW} render={CreateFlow} />
            <Route exact={true} path={path.SETTINGS} render={Settings} />
            <Route exact={true} component={NotFound} />
          </Switch>
        </SiderDemo>

    </Router>
  );
};

export default App;
