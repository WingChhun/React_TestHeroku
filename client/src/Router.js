import React, {Component} from 'react';

//*import react router
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
//*import App
import App from "./App";
class Router extends Component {
    componentWillMount()
    {
        //*Change doc title
        document.title = 'Test ReactExpress Deployment';
    }
    render() {
        return (
            <BrowserRouter baseName={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={App}/>
                </Switch>

            </BrowserRouter>
        );
    }
}

export default Router;
