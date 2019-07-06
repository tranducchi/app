import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DataService from '../../service/DataService';
export default class ListArticle extends Component {

  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item').name,
      headerRight: (
        <TouchableOpacity style={{ paddingRight: 5 }} onPress={() => navigation.navigate('Search')}>
          <Image source={require('../../images/search.png')} style={styles.img} />
        </TouchableOpacity>
      ),
    };

  };
  constructor(props) {
    super(props);
    this.state = {
      star: true,
      data: [],
      current_page: 1,
      category: props.navigation.getParam('item', null)
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
  componentDidMount() {
    const { category } = this.state;
    const listArticle = DataService.getData('Article');
    const list = listArticle.filter(e => e.cat_id == category.id)
    this.setState({ data: list })
    this.getDataOnline();
  }


  getDataOnline(){
    fetch('http://playnhaccu.com/api/getArticles')
    .then((response) => response.json())
    .then((responseJson) => {
        const newResponse = responseJson.map(e => {
          return {
            id: e.id,
            name: e.name,
            slug: e.slug,
            description:e.description,
            body: e.body,
            cat_id: parseInt(e.cat_id)
          }
        })
        DataService.saveArrayData(newResponse, 'Article');
        const list = responseJson.filter(e => e.cat_id == this.state.category.id)
        this.setState({
          data: list
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.wrap} onPress={() => this.props.navigation.push('DetailScreen', { item: item, name:item.name})}>
            <View style={styles.left}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.des} numberOfLines={1}>{item.description}</Text>
              
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
    padding:10,
    paddingRight:25,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.6,
  },
  title: {
    flex:9,
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {

  },
  des: {
    fontStyle: 'italic'
  },
  star: {
    flex:1,
    width: 20,
    height: 20,
    
  },
  img: {
    width: 30,
    height: 30,
    marginTop: 7,
  }
});