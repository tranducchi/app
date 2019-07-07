import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity,  Image, TextInput, StyleSheet, Keyboard, FlatList} from 'react-native';
import DataService from '../../service/DataService';

export default class Search extends Component {
    
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            listData: [],
            listDataSearch: []
        }
    }
    _clear(){
        this.setState({
            text:''
        })
    }
    _check(){
        if(this.state.text != ''){
            
            return (
                
                <TouchableOpacity onPress={this._clear.bind(this)}>
                <Image source={require('../../images/close.png')} style={styles.close}/>
                </TouchableOpacity>
            )
        }else{
            const { goBack } = this.props.navigation;
            return (
                <TouchableOpacity onPress={() => goBack()}>
                    <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
            )
        }
    }

    componentDidMount(){
        console.log('Search hahaha:');
        const listArticle = DataService.getData('Article');
        this.setState({
            listData: listArticle,
            listDataSearch: listArticle
        })
    }
    slugify(string) {
        const a = 'àáäâãåăæąçćčđèéėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
        const b = 'aaaaaaaaacccdeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------'
        const p = new RegExp(a.split('').join('|'), 'g')
      
        return string.toString().toLowerCase()
          .replace(/\s+/g, '-')
          .replace(p, c => b.charAt(a.indexOf(c)))
          .replace(/&/g, '-and-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-') 
          .replace(/^-+/, '')
          .replace(/-+$/, '') 
      }
    handleFilter(text){
      
        const listFilter = this.state.listData.filter(e => e.slug.toLowerCase().includes(  this.slugify(text)) );
        this.setState({
            listDataSearch: listFilter,
            text
        })
    }
    render() {
        const result = this.state.listDataSearch;
        console.log('List data search:', this.state.listDataSearch);
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.wrap}>
                <View style={styles.search}>
                    <Image source={require('../../images/search.png')} style={styles.back}></Image>
                    <TextInput
                        autoFocus={true}
                        style={styles.input}
                        placeholder="Nhập tên bài hát Vd : Lac Troi"
                        placeholderTextColor='#edeaea'
                        onChangeText={(text) => this.handleFilter(text)}
                        value={this.state.text}
                    />
                    {this._check()}
                </View>
                <Text style={styles.suggest}>
                    Kết quả tìm kiếm : 
                </Text>
                <View style={styles.result}>
                    <FlatList
                        data={this.state.listDataSearch}
                        extraData={this.state.listDataSearch}
                        renderItem={({ item }) =>
                        <TouchableOpacity style={styles.wrap} onPress={() => this.props.navigation.push('DetailScreen', { item: item, name:item.name,})}>
                            <View style={{ height: 40, borderBottomWidth: 1, borderBottomColor: '#CACACA', justifyContent: 'center', paddingLeft: 10}}>
                                <Text style={styles.title}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                        }
                    />
                </View>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
    search: {
        height:50,
        backgroundColor: '#17A2B8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    result: {
        flex: 9.2
    },
    back:{
        width: 20,
        height: 20,
        
    },
    close:{
        width: 20,
        height: 20,
    },
    input:{
        flex:8,
        paddingLeft:20,
        fontSize: 15,
        color:'white',
    },
    cancel:{
        color:"#fff",
        fontWeight: 'bold',
    },
    suggest:{
        height:30,
        paddingTop:5,
        paddingLeft:4,
        backgroundColor:"#E8E8E6",
        
    }
});