import React, {Component} from 'react';
import {MainPage, CoffeePage} from '../pages';

import Footer from '../footer';
import './style.sass';
export default class App extends Component {
    render() {
        return (
            <>
                <MainPage/>
                <CoffeePage/>
                <Footer/>
            </>
        )
    }
}
