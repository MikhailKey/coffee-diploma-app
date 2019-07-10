import React, {Component} from 'react';
import {Row} from 'reactstrap';
import GoodListItem from '../goodListItem';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {allGoodsLoaded, allGoodsRequested, allGoodsError} from '../../actions';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

class GoodList extends Component {
    componentDidMount() {
        this.props.allGoodsRequested();
        const {CoffeeService} = this.props;
        CoffeeService.getAllGoods()
        .then(res => this.props.allGoodsLoaded(res))
        .catch(res => this.props.allGoodsError(res));
    }
    render() {
        const {goodsItems, loading, error} = this.props;
        if (error) {return <ErrorMessage/>}
        if (loading) {
            return <Spinner/>
        }
        return(
            <Row>
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                    {
                       goodsItems.map(goodItem => {
                       return <GoodListItem  key={goodItem.name} goodItem={goodItem}/>
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
        goodsItems: state.allGoods,
        loading: state.loading,
        error: state.error,
    }
}
const mapDispatchToProps = {
    allGoodsLoaded,
    allGoodsRequested,
    allGoodsError
};


export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(GoodList));