import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class DrawMenu extends Component {
  render() {
    return (
      <View style={styles.wrap}>
          <Text style={styles.sub}>App được thiết kế bởi : </Text>
          <Text style={styles.title}>Playnhaccu.com</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    wrap:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'gray'
    },
    sub:{
        fontSize:15,
        color:'white'
    },
    title:{
        fontSize:20,
        color:'orange'
    }
});