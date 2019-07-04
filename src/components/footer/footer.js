import React from 'react';
import {Container, Row} from 'reactstrap';
import './footer.sass'
import LogoBlack from '../../logo/Logo_black.svg';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';


const Footer = () => {
    return (
        <footer>
        <Container>
           <Row>
                <div className="col-lg-5 offset-lg-4">
                    <ul className="footer">
                        <li className="footer__item">
                            <a href="/">
                                <img src={LogoBlack} alt="logo"></img>
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="/">Our coffee</a>
                        </li>
                        <li className="footer__item">
                            <a href="/">For your pleasure</a>
                        </li>
                    </ul>
                </div>
            </Row>
            <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
        </Container>
    </footer>
    );
};

export default Footer;