import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import AppHeader from '../appHeader';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';
import './coffeepage.sass'; 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class ItemPage extends Component {
    render() {
        const {name, country, description, url, price} = this.props.selectedItem;
        return( 
            <>
             <div className="banner">
                <Container>
                    <AppHeader/>
                    <h1 className="title-big">{name}</h1>
                </Container>
            </div>
            <section className="shop">
                    <Container>
                        <Row>
                        <div className="col-lg-5 offset-1">
                                <img className="shop__girl" src={url} alt={name}></img>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About it</div>
                                <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                                <div className="shop__point">
                                    
                                </div>
                                <div className="shop__point">
                                    <span>Country: </span>
                                    {country}
                                </div>
                                <div className="shop__point">
                                    <span>Description: </span>
                                    {description}
                                </div>
                                <div className="shop__point">
                                    <span>Price: </span>
                                    <span className="shop__point-price">{price}$</span>
                                </div>
                                <Link to="/coffee"><button className="shop__filter-btn">Back</button></Link>
                            </div>
                        </Row>
                    </Container>
            </section>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectedItem: state.selectedItem,
    }
}


export default connect(mapStateToProps)(ItemPage);