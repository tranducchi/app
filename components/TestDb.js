import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase("test", "~camam.sqlite", 200000, console.log("success"));
export default class TestDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    // db.transaction(function (txn) {
    //   txn.executeSql('SELECT * FROM `DemoTable`', [], function (tx, res) {
    //     for (let a = 0; a < res.rows.length; ++a) {
    //       console.log('item:', res.rows.item(a).name);
    //     }
    //   });
    // });
  }
  componentDidMount() {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS camam( '
       + 'cam TEXT ); ');
       console.log(tx)
  });
    fetch('http://playnhaccu.com/api/getArticles')
      .then((response) => response.json())
      .then((responseJson) => {
        db.executeSql('INSERT INTO camam (text) VALUES ('+responseJson+');');
        this.setState({
          data: responseJson
        })
        console.log(responseJson.length)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
