import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.NavigationContainer>
        <Stack.Screen Name = "HomeScreen" component = {HomeScreen} />
        <Stack.Screen Name = "ProductsList" component = {ProductsList} />
        <Stack.Screen Name = "ProductDetails" component = {ProductDetails} />
        <Stack.Screen Name = "EmployeesList" component = {EmployeesList} />
        <Stack.Screen Name = "EmployeeDetails" component = {EmployeeDetails} />
        <Stack.Screen Name = "OrdersList" component = {OrdersList} />
        <Stack.Screen Name = "OrderDetails" component = {OrderDetails} />



        

      



      </Stack.NavigationContainer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
