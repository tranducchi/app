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
          {
            if(item.name=='Nhạc Trẻ'){
              return (
                <View style={styles.wrap}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListArticle', { item: item })}
                style={styles.cat}>
                
                  <Image source={require('../../images/nhac-tre.png')} style={styles.img} />
                </TouchableOpacity>
              </View>
              )
             
            }
            if(item.name=='Nhạc Trung Hoa'){
              return (
                <View style={styles.wrap}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListArticle', { item: item })}
                style={styles.cat}>
                  <Image source={require('../../images/nhac-trung-quoc.png')} style={styles.img} />
                </TouchableOpacity>
              </View>
              )
            }
            if(item.name=='Nhạc Trữ Tình'){
              return (
                <View style={styles.wrap}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListArticle', { item: item })}
                style={styles.cat}>
                  <Image source={require('../../images/nhac-tru-tinh.png')} style={styles.img} />
                </TouchableOpacity>
              </View>
              )
            }
            if(item.name=='Dân Ca - Quan Họ'){
              return (
                <View style={styles.wrap}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListArticle', { item: item })}
                style={styles.cat}>
                  <Image source={require('../../images/dan-ca.png')} style={styles.img} />
                </TouchableOpacity>
              </View>
              )
            }
            if(item.name=='Nhạc Thiếu Nhi'){
              return (
                <View style={styles.wrap}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListArticle', { item: item })}
                style={styles.cat}>
                  <Image source={require('../../images/nhac-thieu-nhi.png')} style={styles.img} />
                </TouchableOpacity>
              </View>
              )
            }
            if(item.name=='Nhạc Cách Mạng'){
              return (
                <View style={styles.wrap}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListArticle', { item: item })}
                style={styles.cat}>
                  <Image source={require('../../images/nhac-cach-mang.png')} style={styles.img} />
                </TouchableOpacity>
              </View>
              )
            }
            if(item.name=='Nhạc Nước Ngoài'){
              return (
                <View style={styles.wrap}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListArticle', { item: item })}
                style={styles.cat}>
                  <Image source={require('../../images/nhac-nuoc-ngoai.png')} style={styles.img} />
                </TouchableOpacity>
              </View>
              )
            }
            if(item.name=='Quê Hương - Đất Nước'){
              return (
                <View style={styles.wrap}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListArticle', { item: item })}
                style={styles.cat}>
                  <Image source={require('../../images/que-huong-dat-nuoc.png')} style={styles.img} />
                </TouchableOpacity>
              </View>
              )
            }
          }
        
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
  }
});