import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, Slider, TouchableHighlight, Image, Easing,TouchableWithoutFeedback, Animated} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import HTML from 'react-native-render-html';
var {height, width} = Dimensions.get('window');
export default class DetailScreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        item : props.navigation.getParam('item', null),
        speed : 0,
        showSlider: true,
        fun : true,
        yValue : new Animated.Value(0),
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
      const { showSlider } = this.state;
        this.setState({
          showSlider: !showSlider,
        })
    }
    _fun(){
      this.setState({
        fun:!this.state.fun
      })
    }
    _scroll(val){
      this.setState({
        speed:val,
        fun:false
      })
      if(val==0){
        this.setState({
          fun:true
        })
      }
    this.refs.toEnd.scrollToEnd({duration:3000})
    }
    render() {
      const { item, showSlider } = this.state;
      return (   
        
          <View style={styles.wrap}>
            <ScrollView
             ref="toEnd"
              >
            <TouchableHighlight underlayColor="rgba(255, 255, 255, 0)" onPress={this._show.bind(this)}>
             
                <HTML tagsStyles={ {p: { fontSize: 17, color:'#3a3c3f' }}} html={item && item.body} imagesMaxWidth={Dimensions.get('window').width} 
                />
                </TouchableHighlight>
                <KeepAwake />
            </ScrollView>
            <View style={[styles.scroll, { bottom: showSlider ? 10 : -40 } ]}>
              {this.state.fun ? (<TouchableWithoutFeedback  style={styles.fun} onPress={this._fun.bind(this)}>
                <Image source={require('../../images/play.png')} style={styles.img}></Image>
              </TouchableWithoutFeedback>) :(<TouchableWithoutFeedback  style={styles.fun} onPress={this._fun.bind(this)}>
                <Image source={require('../../images/pause.png')} style={styles.img} ></Image>
              </TouchableWithoutFeedback>) }
              <Slider
                style={styles.slider}
                step={2}
                onValueChange={(val)=>{this._scroll(val)}}
                minimumValue={0}
                maximumValue={20}
              />
              <Text style={styles.speed}>{this.state.speed}.x</Text>
            </View>
          </View>
         
      );
    }
  }
const styles = StyleSheet.create({
    wrap:{
        flex:1,
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
      flex:1,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      height:40,
      backgroundColor:'#dee1e6',
    },
    fun:{
      flex:3.5,
      paddingLeft:5
    },
    slider:{
      flex:6
    },
    speed:{
      flex:0.8
    },
    img:{
      marginLeft:10
    }
});