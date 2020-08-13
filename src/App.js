/*
Structure of Web Application
*/

import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"


import "./App.css";
import MainPage from './pages/MainPage'
import MicroPlasticPage from './pages/MicroPlasticPage'
import WelcomePage from './pages/WelcomePage'
import CalculatorPage from './pages/CalculatorPage'
import VisualizationPage from './pages/VisualizationPage'
import PlasticsEntry from './pages/PlasticsEntry'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={WelcomePage}/>
                    <Route exact path="/MainPage" component={MainPage}/>
                    <Route exact path="/MicroPlastics" component={MicroPlasticPage}/>
                    <Route exact path="/Calculator" component={CalculatorPage}/>
                    <Route exact path="/VisualizationPage" component={VisualizationPage}/>
                    <Route exact path="/PlasticsEntry" component={PlasticsEntry}/>
                </Switch>
            </BrowserRouter>
        );
    }
};

// We will pass this function to ImageList and then to Image -> Quiet a bit of props drilling, the code can be refactored and place all the state management in ImageList itself to avoid props drilling. It's an exercise for you :)

export default App;

