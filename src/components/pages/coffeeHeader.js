import React from 'react';
import {Container} from 'reactstrap';
import AppHeader from '../appHeader';

const CoffeeHeader = () => {
    return (
        <>
            <div className="banner">
                <Container>
                    <AppHeader/>
                    <h1 className="title-big">Our Coffee</h1>
                </Container>
            </div>
        </>
    );
};

export default CoffeeHeader;