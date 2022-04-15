import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from "./Screens/Home"
import Detection from "./Screens/Detection"
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown : false}}>
   <Stack.Screen name = "Home" component = {Home}/>
   <Stack.Screen name = "Detection" component = {Detection}/>
   </Stack.Navigator> 
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  });
