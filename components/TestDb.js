import React, { Component } from 'react';
import { View, Text } from 'react-native';
var SQLite = require('react-native-sqlite-storage');

export default class TestDb extends Component {
  constructor(props) {
    super(props);
    var db = SQLite.openDatabase("test", "~camam.sqlite", 200000, console.log("success"));
    db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
      console.log("Create table success")
    }, function (error) {
      console.log('Transaction ERROR: ' + error.message);
    }, function () {
      console.log('Populated database OK');
    });

    db.transaction(function (txn) {
      txn.executeSql ('SELECT * FROM `DemoTable`', [], function (tx, res) {
        for (let a = 0; a < res.rows.length; ++a) {
        console.log ('item:', res.rows.item(a));
        }
        });
    });
  }


  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
