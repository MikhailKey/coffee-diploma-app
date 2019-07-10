import React, {Component} from 'react';
import {connect} from 'react-redux';
import {countryFiltered} from '../../actions/';
import idGenerator from 'react-id-generator';
class CoffeeFilter extends Component {
    render() {
        const {allCoffee} = this.props;
        let countries = [];
        for (let i = 0; i < allCoffee.length; i++) {
            countries.push(allCoffee[i].country);
        }
        countries = [...new Set(countries)];
        const items = countries.map((item) => {
            return <button key={idGenerator()} onClick={() => this.props.countryFiltered(item, allCoffee)} className="shop__filter-btn">{item}</button>
        })
        return(
            <>
      
                <div className="col-lg-4">
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            {items}
                        </div>
                    </div>
                </div>     
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allCoffee: state.allCoffee,
        countryChosen: state.countryChosen
    }
}

const mapDispatchToProps = {
    countryFiltered,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeFilter);