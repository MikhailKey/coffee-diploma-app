import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import './coffeepage.sass'; 
import CoffeeFilter from '../coffeeFilter';

import BeansLogoDark from '../../logo/Beans_logo_dark.svg';
import CoffeeGirl from '../../img/coffee_girl.jpg';

export default class CoffeePage extends Component {
    render() {
        return (
            
            <section className="shop">
                <Container>
                    <Row>
                        <div class="col-lg-4 offset-2">
                            <img class="shop__girl" src={CoffeeGirl} alt="girl"></img>
                        </div>
                        <div class="col-lg-4">
                            <div class="title">About our beans</div>
                            <img class="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                            <div class="shop__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br></br><br></br>
                                    Afraid at highly months do things on at. Situation recommend objection do intention<br></br>
                                    so questions. <br></br>
                                    As greatly removed calling pleased improve an. Last ask him cold feel<br></br>
                                    met spot shy want. Children me laughing we prospect answered followed. At it went<br></br>
                                    is song that held help face.
                                </div>
                        </div>
                    </Row>
                    <div class="line"></div>
                    <CoffeeFilter/>
                </Container>
            </section>
        )
    }
}