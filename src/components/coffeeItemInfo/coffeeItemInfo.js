import React from 'react';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';
import CoffeeItem from '../../img/coffee_item.jpg';
import {Link} from 'react-router-dom';

const CoffeeItemInfo = () => {
    return (
        <>
        <div className="col-lg-5 offset-1">
                                <img className="shop__girl" src={CoffeeItem} alt="coffee_item"></img>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About it</div>
                                <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                                <div className="shop__point">
                                    <span>Country: </span>
                                    Brazil
                                </div>
                                <div className="shop__point">
                                    <span>Description: </span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className="shop__point">
                                    <span>Price: </span>
                                    <span className="shop__point-price">16.99$</span>
                                </div>
                                <Link to="/coffee"><button className="shop__filter-btn">Back</button></Link>
                            </div>
        </>
    )
}
export default CoffeeItemInfo;