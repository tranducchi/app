import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class ListArticle extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
      headerRight: (
        <TouchableOpacity style={{paddingRight:5}} onPress={()=>navigation.navigate('Search')}>
            <Image source={require('../../images/search.png')} style={styles.img}/>
        </TouchableOpacity> 
      ),
    };
    
  };
  constructor(props) {
    super(props);
    this.state = {
      star: true,
      data : [],
      current_page:1
    }
  }

  _star() {
    if (this.state.star == true) {
      return (
        <TouchableOpacity onPress={this._clickStar.bind(this)}>
          <Image source={require('../../images/star-outline.png')} style={styles.star}></Image>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={this._unStar.bind(this)}>
          <Image source={require('../../images/star-yellow.png')} style={styles.star}></Image>
        </TouchableOpacity>
      )
    }
  }
  _clickStar() {
    this.setState({
      star: false
    });
  }
  _unStar() {
    this.setState({
      star: true
    });
  }
  _loadMore(){
    fetch('http://playnhaccu.com/api/getArticles/?page='+ (this.state.current_page +1))
    .then((response) => response.json())
    .then((responseJson) => {
      con =con.concat(responseJson.data)
      this.setState({
      
        current_page: this.state.current_page + 1,
        data : con
      })
      console.log(this.state.current_page)
    })
    .catch((error) => {
      console.error(error);
    });
  }
  componentDidMount(){
    fetch('http://playnhaccu.com/api/getArticles/?page='+ (this.state.current_page))
    .then((response) => response.json())
    .then((responseJson) => {
      con = responseJson.data;
      this.setState({
        data : con
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {

    const {navigate} = this.props.navigation;
    return (
      <FlatList
        onEndReached={() => this._loadMore()}
        onEndReachedThreshold={1}
        data={this.state.data}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.wrap}  onPress={() => this.props.navigation.push('DetailScreen')}>
            <View style={styles.left}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.des}>Có lẽ nào em lại quên đi .....</Text>
            </View>
            <View style={styles.right}>
              {this._star()}
            </View>
          </TouchableOpacity>
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {

  },
  des: {
    fontStyle: 'italic'
  },
  star: {
    width: 20,
    height: 20,
  },
  img:{
    width: 30,
    height: 30,
    marginTop: 7,
  }
});