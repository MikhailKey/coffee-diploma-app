import React, {Component} from 'react';
import {Row} from 'reactstrap';

export default class CoffeeFilter extends Component {
    render() {
        return(
            <Row>
                <div class="col-lg-4 offset-2">
                    <form action="#" class="shop__search">
                        <label class="shop__search-label" for="filter">Looking for</label>
                        <input id="filter" type="text" placeholder="start typing here..." class="shop__search-input"></input>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="shop__filter">
                        <div class="shop__filter-label">
                            Or filter
                        </div>
                        <div class="shop__filter-group">
                            <button class="shop__filter-btn">Brazil</button>
                            <button class="shop__filter-btn">Kenya</button>
                            <button class="shop__filter-btn">Columbia</button>
                        </div>
                    </div>
                </div>
            </Row>
        )
    }
}