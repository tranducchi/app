import React, { Component } from 'react';
import { Animated,Easing, StyleSheet, View, Text, Image } from 'react-native';

export default class WaitScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    yValue : new Animated.Value(-70),
    xValue : new Animated.Value(-70),
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
    Animated.timing(
      this.state.yValue,
      {
        toValue: 0,
        easing: Easing.bounce,
        duration: 1500,
      }
    ).start();
    Animated.timing(
      this.state.xValue,
      {
        toValue: 0,
        easing: Easing.bounce,
        duration: 1500,
      }
    ).start();  
  }

  render() {
    let { fadeAnim } = this.state;
    let { yValue } = this.state;
    let { xValue } = this.state;
    return (
      <View style={styles.wrap}>
        <View style={styles.up}>
          <Animated.View style={{...this.props.style,
          opacity: fadeAnim, top: yValue}}>
            <Image style={styles.img} source={require('../images/logo.png')}></Image>
       
          </Animated.View>
          <Animated.View style={{...this.props.style,left:xValue}}>
            <Text style={styles.intro}>Kết nối đam mê sáo trúc</Text>
          </Animated.View>
        </View>
        <View style={styles.down}>
          <Text style={styles.web}>wwww.Playnhaccu.com</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#17A2B8',
  },
  up: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {

  },
  intro: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 5
  },
  down: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  web: {
    color: 'white',
    fontWeight: 'bold'
  }

});
