
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import HomeScreen from './components/HomeScreen';
import NavigationScreen from './components/NavigationScreen';
import './config/Reactotron'

export default class App extends Component {
  render() {
    return (
      <NavigationScreen/>
    );
  }
}
