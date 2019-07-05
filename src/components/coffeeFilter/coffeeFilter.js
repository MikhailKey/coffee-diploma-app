import React, {Component} from 'react';
import {Row} from 'reactstrap';
import CoffeeList from '../coffeeList'
export default class CoffeeFilter extends Component {
    render() {
        return(
            <>
            <Row>
                <div className="col-lg-4 offset-2">
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" HTMLfor="filter">Looking for</label>
                        <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"></input>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            <button className="shop__filter-btn">Brazil</button>
                            <button className="shop__filter-btn">Kenya</button>
                            <button className="shop__filter-btn">Columbia</button>
                        </div>
                    </div>
                </div>
            </Row>
            <CoffeeList/>
            </>
        )
    }
}