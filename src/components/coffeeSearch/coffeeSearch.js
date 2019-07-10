import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findItems} from '../../actions/';

class CoffeeSearch extends Component {
    findItem(e) {
        //console.log(e.target.value);
        //console.log(this.props.searchItems)
        this.props.findItems(this.props.searchItems, e.target.value);
    }
    render() {
        return (
                <div className="col-lg-4 offset-2">
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input" onChange={(e) => this.findItem(e)}/>
                    </form>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        searchItems: state.allCoffee
    }
}

const mapDispatchToProps = {
    findItems
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeSearch);