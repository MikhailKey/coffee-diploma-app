import React, {Component} from 'react';
import {MainPage, CoffeePage, ItemPage, PleasurePage} from '../pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from '../footer';
import {connect} from 'react-redux';

import './style.sass';

class App extends Component {
    render() {
        return (
            <>
            <Router>
                <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/coffee/' exact component={CoffeePage}/>
                <Route path={`/coffee/${this.props.itemName}`} exact component={ItemPage}/>
                <Route path='/pleasure/' exact component={PleasurePage}/>
                </Switch>
                <Footer/>
            </Router>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      itemName: state.itemName,
    }
  }
  
  export default connect(mapStateToProps)(App)