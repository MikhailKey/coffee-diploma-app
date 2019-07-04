import React from 'react';
import Logo from '../../logo/Logo.svg';
import {Row} from 'reactstrap';

import './header.sass'
const AppHeader = () => {
    return (
        <Row>
            <div className="col-lg-6">
                    <header>
                        <ul className="header">
                            <li className="header__item">
                                <a href="/">
                                    <img src={Logo} alt="logo"></img>
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="/">Our coffee</a>
                            </li>
                            <li className="header__item">
                                <a href="/">For your pleasure</a>
                            </li>
                        </ul>
                    </header>
               </div>
        </Row>
    )
}

export default AppHeader;