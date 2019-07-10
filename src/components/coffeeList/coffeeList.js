import React, {Component} from 'react';
import {Row} from 'reactstrap';
import CoffeeListItem from '../coffeeListItem';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {allCoffeeLoaded, allCoffeeRequested, allCoffeeError} from '../../actions';
import idGenerator from 'react-id-generator';
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
        const {coffeeItems, loading, error} = this.props;
        if (error) {return <ErrorMessage/>}
        if (loading) {
            return <Spinner/>
        }
        return(
            <Row>
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                    {
                       coffeeItems.map(coffeeItem => {
                       return <Link key={idGenerator()} to={`/coffee/item`} ><CoffeeListItem  coffeeItem={coffeeItem}/></Link>
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
        coffeeItems: state.allCoffee,
        loading: state.loading,
        error: state.error,
    }
}
const mapDispatchToProps = {
    allCoffeeLoaded,
    allCoffeeRequested,
    allCoffeeError
};


export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));