import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class DetailScreen extends React.Component {
    static navigationOptions = {
      title: 'Chi tiết',
    };
    render() {
      return (
        <View style={styles.wrap}>
            <View style={styles.body}>
                <Text style={styles.text}>Người con gái bé xinh đạp xe trên phố đông
La si đố si la … mi sol sol la fa
Tà áo trắng bay bay lòng vui như nở hoa
Sol la si la sol … re fa fa sol mi
Em mỉm cười xinh tươi ôi khung trời hai mươi
Mi re do la la… mi re do la la
Niềm vui tương lai đón chờ em
La si si si do la si..

Lòng tha thiết yêu đời và yêu đất nước thôi
La si đố si la … mi sol sol la fa
Gợi trong ánh mắt em ngàn muôn tia khát vọng
Sol la si la sol … re fa fa sol mi
Vẫy tay chào thế giới bước trên miền đất mới
Mi re do la la… mi re do la la
Tự tin em cô gái Việt Nam
La si si si do la si…
ĐK :
Rồi mai đây em tung bay bay đến những chân trời xa
La si do2 do2 do2 do2 …. re2 mi2 sol2 fa2 mi2 fa2
Thì hãy luôn ghi trong tim màu da tiếng nói người Việt Nam
Si do2 re2 re2 re2 re2 … re2 mi2 fa2 fa2 mi2 re2 mi2
Dành tình yêu tặng cho đời , dành tình yêu tặng cho người
La si do2 si do2 la… la si do2 si do2 la
Và niềm tin trong em luôn rực cháy
La do2 re2 re2 re2 do2 si mi2

Nụ cười em luôn trên môi cả thế giới sẽ nhận ra
La si do2 do2 do2 do2 …. re2 mi2 sol2 fa2 mi2 fa2
Một Việt Nam luôn hân hoang tràn dâng sức sống qua thời gian
Si do2 re2 re2 re2 re2 … re2 mi2 fa2 fa2 mi2 re2 mi2
Hãy bay cao tận chân trời , hãy giang tay chào cuộc đời
La si do2 si do2 la… la si do2 si do2 la
và giờ đây tôi vui khi gặp em
La do2 re2 re2 re2 do2 la si
Xin chào em
La sol la

Tags : Quê Hương - Đất Nước</Text>
            </View>
            <View style={styles.scroll}>
                <Text>Scrool</Text>
            </View>
        </View>
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