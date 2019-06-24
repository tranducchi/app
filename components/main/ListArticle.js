import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class ListArticle extends Component {
  constructor(props){
    super(props);
    this.state={
      star:true
    }
  }

  _star(){
    if(this.state.star == true){
      return (
        <TouchableOpacity onPress={this._clickStar.bind(this)}>
            <Image source={require('../../images/star-outline.png')}></Image>
        </TouchableOpacity>
      )
    }else{
      return (
        <TouchableOpacity onPress={this._unStar.bind(this)} >
            <Image source={require('../../images/star-yellow.png')}></Image>
        </TouchableOpacity>
      )
    }
  }
  _clickStar(){
    this.setState({
      star:false
    });
  }
  _unStar(){
    this.setState({
      star:true
    });
  }
  render() {
    return (
      <FlatList
        data={[{ key: 'a' }, { key: 'b' }]}
        renderItem={({ item }) =>
          <View style={styles.wrap}>
            <View style={styles.left}>
              <Text style={styles.title}>HongKong 1</Text>
              <Text style={styles.author}></Text>
              <Text style={styles.des}></Text>
            </View>
            <View style={styles.right}>
              {this._star()}
            </View>
          </View>
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  title: {

  },
  author: {

  },
  des: {

  }
});