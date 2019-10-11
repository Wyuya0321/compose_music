import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/contactPage/ContactPage';
import ComposeApp from '../components/compose/ComposeApp';


const AppRouter = () => (
    <BrowserRouter>
        <div className="front__page">
            <Switch>
                <Route path="/" activeClassName="active" component={DashboardPage} exact={true}></Route>
                <Route path="/create" activeClassName="active" component={ComposeApp}></Route>
                <Route path="/about" activeClassName="active" component={AboutPage}></Route>
                <Route path="/contact" activeClassName="active" component={ContactPage}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;