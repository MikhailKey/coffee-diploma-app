import React, {Component} from 'react';
import {Row} from 'reactstrap';
import CoffeeListItem from '../coffeeListItem';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {allCoffeeLoaded} from '../../actions';
import idGenerator from 'react-id-generator';
class CoffeeList extends Component {
    componentDidMount() {
        const {CoffeeService} = this.props;
        CoffeeService.getAllCoffee()
        .then(res => this.props.allCoffeeLoaded(res)); 
    }
    render() {
        const {coffeeItems} = this.props;
        return(
            <Row>
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                    {
                       coffeeItems.map(coffeeItem => {
                       return  <CoffeeListItem key={idGenerator()} coffeeItem={coffeeItem}/> 
                   })
                   }
                    </div>
                </div>
            </Row>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        coffeeItems: state.allCoffee
    }
}
const mapDispatchToProps = {
    allCoffeeLoaded
};


export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));