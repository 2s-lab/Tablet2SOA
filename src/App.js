/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home2S from './screens/home-2s'

const mapStateToProps = function(state){
    return {
        greeting: state.greeting
    }
};

type Props = {};
class App extends Component{
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <Home2S />
        );
    }
}

export default connect(mapStateToProps)(App);


