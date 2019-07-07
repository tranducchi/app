import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, Slider, TouchableWithoutFeedback} from 'react-native';

import HTML from 'react-native-render-html';

export default class DetailScreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        item : props.navigation.getParam('item', null),
        speed : 0,
        showSlider: true,
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
    _show(){
      console.log('Click')
      const { showSlider } = this.state;
        this.setState({
          speed:this.state.speed+1,
          showSlider: !showSlider,
        })
    }

    render() {
      const { item, showSlider } = this.state;

      return (   
      
          <View style={styles.wrap}>
             <Text>{this.state.speed}</Text>
            <Text>{this.state.showSlider}</Text>
          
            <ScrollView style={styles.body}>
            <TouchableWithoutFeedback onPress={this._show.bind(this)}>
                <HTML tagsStyles={ {p: { fontSize: 17, color:'#3a3c3f' }} } html={item && item.body} imagesMaxWidth={Dimensions.get('window').width} 
                />
             </TouchableWithoutFeedback>
            </ScrollView>
            <Slider style={[styles.scroll, { bottom: showSlider ? 10 : -40 } ]}
              step={2}
              onValueChange={val => this.setState({ speed: val })}
              minimumValue={0}
              maximumValue={20}
            />
          
          </View>
         
      );
    }
  }
const styles = StyleSheet.create({
    wrap:{
        flex:1,
        paddingBottom:40,
        padding:10
    },
    body:{
        flex:1,
        fontSize:20
    },
    text:{
        fontSize:17
    },
    scroll:{
      position:'absolute',
      width:Dimensions.get('window').width-40,
      left:Dimensions.get('window').width-390,
      bottom:10,
      borderRadius:20,
      borderWidth: 1,
      height:40,
      backgroundColor:'#dee1e6'
    }
});