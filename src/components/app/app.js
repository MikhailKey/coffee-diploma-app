import React, {Component} from 'react';
import {MainPage, CoffeePage} from '../pages';
import {Container} from 'reactstrap';
import Footer from '../footer';
import './style.sass';
export default class App extends Component {
    render() {
        return (
            <Container>
                <MainPage/>
                <CoffeePage/>
                <Footer/>
            </Container>
        )
    }
}
