import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import {Header} from "react-native-elements"
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default class Home extends React.Component {
  render(){
  return (
    <View style={styles.container}>
    <SafeAreaProvider>
    <ImageBackground source = {require("../assets/bg.jpg")} style = {styles.bgimg}>
    <Header
    centerComponent = {{text:"DETECTION APP", style : {fontWeight : "bold", fontSize: 24, color :"white"}}}
    backgroundColor = "teal"/>
    <View style = {{flex :0.6, justifyContent : "center", alignItems : "center"}}>
    <TouchableOpacity
    style = {styles.button}
    onPress = {()=>this.props.navigation.navigate("Detection")}
    >
    <Text style = {{fontSize : 25, alignSelf : "center", justifyContent : "center", margin : 80, fontWeight : "bold", color : "white"}}>DETECT</Text>
    </TouchableOpacity>
    </View>
    </ImageBackground>
    </SafeAreaProvider>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgimg:{
    resizeMode:"cover",
    flex : 1
  },
  button:{
    backgroundColor : "teal",
    width : "60%",
    height : "60%",
    borderRadius : 60,
    borderColor : "white",
    borderWidth : 1
  }
});
