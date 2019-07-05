import React,{Component} from 'react';
import {Row} from 'reactstrap';
import OurBestItem from '../ourBestItem';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {bestSellersLoaded} from '../../actions';
import idGenerator from 'react-id-generator';
class OurBest extends Component {
    componentDidMount() {
        const {CoffeeService} = this.props;
        CoffeeService.getBestSellers()
        .then(res => this.props.bestSellersLoaded(res)); 
    }
    render() {
        const {coffeeBestItems} = this.props;

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
        coffeeBestItems: state.bestSellers
    }
}
const mapDispatchToProps = {
    bestSellersLoaded
};


export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(OurBest));