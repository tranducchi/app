import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import DataService from '../../service/DataService';
const { height, width } = Dimensions.get('window');
export default class MainScreen extends Component {



  constructor(props){
    super(props);
    this.state = {
      listCategory: []
    }
  }


  componentDidMount(){
    const list = DataService.getData('Category');
    console.log('List:', list);
    this.setState({ listCategory: list });
    this.getListArticlesOnline();
  }

  getListArticlesOnline(){
    fetch('http://playnhaccu.com/api/getCategories')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          listCategory: responseJson
        })
        DataService.saveArrayData(responseJson, 'Category');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log('Render:', this.state.listCategory);
    const { listCategory } = this.state;

    return (
      <FlatList
        data={listCategory}
        renderItem={({ item }) =>
          <View style={styles.wrap}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ListArticle', { item: item })}
            style={styles.cat}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.count}>(234 bài)</Text>
              <View style={styles.square}></View>
              <Image source={require('../../images/nhac-tre.jpg')} style={styles.img} />
            </TouchableOpacity>
          </View>
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    flex:1,
    padding: 10,
     zIndex:1,
     left:0
  },
  cat: {
    flex: 1,
    
  },
  img: {
    width: width - 20,
    height: height / 4 + 10,
  },
  square:{
    position:'absolute',
    width: width - 20,
    height: height / 4 + 10,
    top:0,
    zIndex:1,
    opacity:0.4,
    backgroundColor:'black'
  },
  title: {
    fontWeight: 'bold',
    position:'absolute',
    top:height/6,
    left:width/2-45,
    zIndex:2,
    fontSize: 20,
    color:'white'
  },
  count:{
    position:'absolute',
    top:height/4-15,
    left:width/2-40,
    zIndex:2,
    color:'white'
  }
});