import React from 'react';
import {MainPage, CoffeePage, ItemPage, PleasurePage} from '../pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from '../footer';

import './style.sass';

const App = () => {

        return (
            <>
            <Router>
                <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/coffee/' exact component={CoffeePage}/>
                <Route path='/coffee/item/' exact component={ItemPage}/>
                <Route path='/pleasure/' exact component={PleasurePage}/>
                </Switch>
                <Footer/>
            </Router>
            </>
        )
    }

export default App;