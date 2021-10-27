import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "@alef/pages/home";
import NotFound from "@alef/pages/not-found";
import Preview from "@alef/pages/preview";

import { pages } from "@utils/pages";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={pages.PREVIEW}>
                    <Preview />
                </Route>
                <Route exact path={pages.HOME}>
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>

    );
};

export default Routes;