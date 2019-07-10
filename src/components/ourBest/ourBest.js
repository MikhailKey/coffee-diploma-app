import React,{Component} from 'react';
import {Row} from 'reactstrap';
import OurBestItem from '../ourBestItem';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {bestSellersLoaded, bestSellersRequested, bestSellersError} from '../../actions';
import idGenerator from 'react-id-generator';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage'
class OurBest extends Component {
    componentDidMount() {
        this.props.bestSellersRequested();
        const {CoffeeService} = this.props;
        CoffeeService.getBestSellers()
        .then(res => this.props.bestSellersLoaded(res)) 
        .catch(res => this.props.bestSellersError(res));
    }
    render() {
        const {coffeeBestItems, loading, error} = this.props;
        if (error) {return <ErrorMessage/>}
        if (loading) {
            return <Spinner/>
        }
        return (
            <Row>
            <div className="col-lg-10 offset-lg-1">
                <div className="best__wrapper">
                    {
                       
                        coffeeBestItems.map(coffeeBestItem => {
                        return  <OurBestItem key={idGenerator()} coffeeBestItem={coffeeBestItem}/> 
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
        coffeeBestItems: state.bestSellers,
        loading: state.loading,
        error: state.error,
    }
}
const mapDispatchToProps = {
    bestSellersLoaded,
    bestSellersRequested,
    bestSellersError
};


export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(OurBest));