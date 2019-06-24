import React, { Component } from 'react';
import {View,TextInput, TouchableOpacity } from 'react-native'
export default class TestHeader extends Component {
  static navigationOptions = {
		header: null
  }
  constructor(props){
    super(props)
    this.state ={
          changeHeader:true
    }
  }
  _renderHeader(){
    if(this.state.changeHeader == true){
      return(
        <View style={{height:50, width:'100%'}}>

        </View>
      )
    }
  }
  render() {
    return (
    <View style={{flex:1, backgroundColor:'red'}}>
      <TouchableOpacity style ={{height:50, width:'10%', backgroundColor:'white'}}>

      </TouchableOpacity>
    </View>
    );
  }
}
