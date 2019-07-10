import React, {Component} from 'react';
import {Row} from 'reactstrap';
import CoffeeListItem from '../coffeeListItem';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {allCoffeeLoaded, allCoffeeRequested, allCoffeeError, itemSelected} from '../../actions';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import {Link} from 'react-router-dom';
class CoffeeList extends Component {
    componentDidMount() {
        this.props.allCoffeeRequested();
        const {CoffeeService} = this.props;
        CoffeeService.getAllCoffee()
        .then(res => this.props.allCoffeeLoaded(res))
        .catch(res => this.props.allCoffeeError(res));
    }
    render() {
        const {filterItems, coffeeItems, loading, error} = this.props;

        let items = {};
        if (filterItems.length === 0) {
            items = coffeeItems.map(coffeeItem => {
                return <Link key={coffeeItem.name} to={`/coffee/${coffeeItem.name}`} onClick={() => this.props.itemSelected(coffeeItem)} ><CoffeeListItem  coffeeItem={coffeeItem}/></Link>
        })
        } else {
            items = filterItems.map(coffeeItem => {
                return <Link key={coffeeItem.name} to={`/coffee/${coffeeItem.name}`} ><CoffeeListItem  coffeeItem={coffeeItem}/></Link>
        })
        }
        if (error) {return <ErrorMessage/>}
        if (loading) {
            return <Spinner/>
        }
        const content = loading ? <Spinner/> : items;
        return(
            <Row>
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                    {content}
                    </div>
                </div>
            </Row>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        filterItems: state.filterItems,
        coffeeItems: state.allCoffee,
        loading: state.loading,
        error: state.error,
    }
}
const mapDispatchToProps = {
    allCoffeeLoaded,
    allCoffeeRequested,
    allCoffeeError, 
    itemSelected
};


export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));