import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const HomeScreen = ({ navigation }) => {

  return (

    <View style={[styles.container, { justifyContent: "space-evenly" }]}>
      <TouchableOpacity style={styles.homeScreen} onPress={() => navigation.navigate('ProductsList')}>
        <Text style={styles.homeScreenText}>
          Manage Products
        </Text>
      </TouchableOpacity >

      <TouchableOpacity style={styles.homeScreen} onPress={() => navigation.navigate('EmployeesList')}>
        <Text style={styles.homeScreenText}>
          Manage Employees
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeScreen} onPress={() => navigation.navigate('OrdersList')}>
        <Text style={styles.homeScreenText}>
          Manage Orders
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const ProductsList = ({ navigation }) => {
  const arrayData = [{ id: 1, Name: "Watch", Price: "Rs 1000", Image: "https://static-01.daraz.pk/p/cff44875e81c1e9169fc7ff331b53d21.jpg" }]

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={{ marginTop: 25, alignItems: "center" }}>
          <Text style={{ fontSize: 25 }}>
            Name: {item.Name}
          </Text>
          <Text style={{ fontSize: 25 }}>
            Price {item.Price}
          </Text>
          <Image source={{ uri: item.Image }} style={{ width: 50, height: 50 }} />

        </View>
      </TouchableOpacity>

    )

  }
  return (
    <View style={styles.container}>
      <FlatList
        data={arrayData}
        keyExtractor={arrayData.Id}
        renderItem={renderItem}


      />
    </View>

  )
}
const EmployeesList = ({ navigation }) => {
  return (
    <View>
      <Text>
        cat
      </Text>

    </View>

  )
}

const OrdersList = ({ navigation }) => {
  return (
    <View>
      <Text>
        cattt
      </Text>

    </View>

  )
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="EmployeesList" component={EmployeesList} />
        <Stack.Screen name="OrdersList" component={OrdersList} />
        {/* <Stack.Screen name="ProductDetails" component={ProductDetails} />
        
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
        
        <Stack.Screen name="OrderDetails" component={OrderDetails} /> */}
      </Stack.Navigator>
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
  homeScreen: {
    backgroundColor: '#ADD8E6',
    padding: 15,
    borderRadius: 15
  },
  homeScreenText: {
    fontSize: 40
  }
});
