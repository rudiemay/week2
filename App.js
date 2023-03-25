import React, {Component} from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';

import logo from  './assets/snack-icon.png';

class App extends Component {
  render() {
    return (
      <View style={style.container}>
      <View style={style.container1}>
      <Text style={style.textDesign}>"Hello World!"</Text>
      <Image source={logo} style={style.logo}/>
      </View>
      </View>
    )
  }
}

const style= StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#CDC8B1",
  alignItems: 'center',
},
container1:{
  backgroundColor: "#8B8878"
},

textDesign: {
  fontSize: 30,
  color: '#FFF',
  fontWeight: 'bold',
},

logo: {
  width: 50,
  height: 50,
}
});

export default App;