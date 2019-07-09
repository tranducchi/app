
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import HomeScreen from './components/HomeScreen';
import NavigationScreen from './components/NavigationScreen';
import Wait from './components/WaitScreen';
import './config/Reactotron'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isDisplay:true
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isDisplay:false
      })
    }, 2500)
  }
  render() {
    const {isDisplay} = this.state;
    return isDisplay ? <Wait/> : <NavigationScreen/>
  }
}
