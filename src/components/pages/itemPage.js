import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import {CoffeeHeader} from '../pages'
import CoffeeItemInfo from '../coffeeItemInfo'
import './coffeepage.sass'; 
export default class ItemPage extends Component {
    render() {
        return( 
            <>
            <CoffeeHeader/>
            <section className="shop">
                    <Container>
                        <Row>
                            <CoffeeItemInfo/>
                        </Row>
                    </Container>
            </section>
            </>
        )
    }
}