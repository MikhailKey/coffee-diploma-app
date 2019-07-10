import React from 'react';
import {Container} from 'reactstrap';
import AppHeader from '../appHeader';

const GoodHeader = () => {
    return (
        <>
            <div className="banner">
                <Container>
                    <AppHeader/>
                    <h1 className="title-big">For your pleasure</h1>
                </Container>
            </div>
        </>
    );
};

export default GoodHeader;