import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import MainScreen from './MainScreen';
import FavoriteScreen from '../FavoriteScreen';

export default class TabNav extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'home'
    }
  }
  toUp(){
    this.props.onMove();
  }
  render() {
    return (
        <TabNavigator tabBarStyle={styles.wrap}>
        <TabNavigator.Item
          titleStyle={styles.title}
          selected={this.state.selectedTab === 'home'}
          title="Trang chủ"
          renderIcon={() => <Image source={require('../../images/home-black.png')} />}
          renderSelectedIcon={() => <Image source={require('../../images/home-blue.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {<MainScreen navigation={this.props.navigation} />}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Yêu thích"
          badgeText="1"
          renderIcon={() => <Image source={require('../../images/star-yellow.png')} />}
          renderSelectedIcon={() => <Image source={require('../../images/star-blue.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {<FavoriteScreen/>}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
const styles = StyleSheet.create({
    wrap:{
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    title:{
      fontSize:12,
    }
});