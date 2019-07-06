import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import HTML from 'react-native-render-html';

export default class DetailScreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        item : props.navigation.getParam('item', null),
      }
    
    }

    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('name'),
      };
    };

    componentDidMount() {
      const { item } = this.state;
      console.log('Item:', item);
    }


    render() {
      const { item } = this.state;
      return (
        <ScrollView style={{ flex: 1 }}>
                <HTML html={item && item.body} imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
      );
    }
  }
const styles = StyleSheet.create({
    wrap:{
        flex:1
    },
    body:{
        flex:9.2,
    },
    text:{
        fontSize:16
    },
    scroll:{
        flex:0.8,
        alignItems: 'center',
    }
});