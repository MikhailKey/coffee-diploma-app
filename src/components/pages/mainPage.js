import React,{Component} from 'react';
import {Row, Container} from 'reactstrap';
import AppHeader from '../appHeader';
import OurBest from '../ourBest'
import {Link} from 'react-router-dom';
import BeansLogo from '../../logo/Beans_logo.svg';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';

import './mainpage.sass'
export default class MainPage extends Component {
    render() {
        return (
            <>
            <div className="preview">
                <Container>
                    <AppHeader/>
                        <Row>     
                            <div className="col-lg-10 offset-lg-1">
                                <h1 className="title-big">Everything You Love About Coffee</h1>
                                <img className="beanslogo" src={BeansLogo} alt="Beans logo"></img>
                                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                <div className="preview__subtitle">Want to try our beans?</div>
                                <Link to="/coffee" className="preview__btn">More</Link>
                            </div>
                    </Row>
                </Container>
            </div>
            <section className="about">
            <Container>
                    <Row>
                    <div className="col-lg-6 offset-lg-3">
                    <div className="title">About Us</div>
                            <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                            <div className="about__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.<br></br><br></br>
        
                                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
        <section className="best">
        <Container>
            <div className="title">Our best</div>
                <OurBest/>
            </Container>
        </section>
        </>
        )
    }
}