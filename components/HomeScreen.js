import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNav from './main/TabNav';
import Header from './header/Main';
import Drawer from 'react-native-drawer';
import DrawMenu from './DrawMenu';
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    };
  constructor(props){
    super(props);

  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
 
    return (
      <Drawer
      ref={(ref) => this._drawer = ref}
      content={<DrawMenu />
      }
      tapToClose={true}
      openDrawerOffset={0.45}
      >
      <View style={styles.wrap}>
        <View style={styles.header}>
            <Header openDraw={this.openControlPanel}/>
        </View>
        <View style={styles.main}>
            <TabNav navigation={this.props.navigation} />
        </View>
      </View>
      </Drawer>
    );
  }
}
const styles = StyleSheet.create({
    wrap:{
        flex:1,
    },
    header:{
        height:50,
    },
    main:{
        flex:9,
        
    }
});