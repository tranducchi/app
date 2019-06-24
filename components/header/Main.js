import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
var { height, width } = Dimensions.get('window');
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'yes',
            text:'',
        }

    }
    clickSearch() {
        this.setState({
            search: 'no'
        })
    }
    clickClose() {
        this.setState({
            search: 'yes'
        })
    }
    clickClear(){
        this.setState({text:''})
    }
    handl() {
        if (this.state.search == 'yes') {
            return this.Top();
        } else {
            return this.Search();
        }
    }
     // Top View
     Top() {
        return (
            <View style={styles.main}>
                <TouchableOpacity onPress={this.props.openDraw.bind(this)}>
                    <Image source={require('../../images/ic_menu.png')} style={styles.ic} />
                </TouchableOpacity>
                <Text style={styles.title}>Cảm Âm Chuẩn</Text>
                <TouchableOpacity onPress={this.clickSearch.bind(this)}>
                    <Image source={require('../../images/search.png')} style={styles.search} />
                </TouchableOpacity>
            </View>
        );
    }
    // Search View
    Search() {
        return (

            <View style={styles.header}>
                <View style={styles.inSearch}>
                    <TouchableOpacity onPress={this.clickClose.bind(this)}>
                        <Image source={require('../../images/back.png')} style={styles.back} />
                    </TouchableOpacity>
                    <TextInput style={styles.input}
                        ref="demo"
                        placeholder="Nhập tên bài hát"
                        placeholderTextColor="#D1D1D1"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <TouchableOpacity onPress={()=>this.clickClear()}>
                        <Image source={require('../../images/close.png')} style={styles.close} />
                    </TouchableOpacity>
                </View>
                <View style={styles.show}>
                    <Text>Hello</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.wrap}>
                {this.handl()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#17A2B8',
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    ic: {
        width: 30,
        height: 30
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    search: {
        width: 30,
        height: 30,
        marginTop: 7,
    },
    inSearch: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
        paddingLeft: 25,
    },
    input: {
        fontSize: 15,
        color: 'white',
        width:200
    },
    close: {

        width: 20,
        height: 20,
        marginRight: 30,
        
    },
    back:{
        width: 20,
        height: 20,
    },
    header:{
        flex:1
    },
    show:{
        backgroundColor:'gray',
        position:'absolute',
        top:50,
        width:'100%',
        height:'100%',
        zIndex:44
    }
});