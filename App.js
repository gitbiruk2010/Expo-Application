import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Create the bottom tabs navigator
const Tab = createMaterialBottomTabNavigator();

// Home screen component
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello Biruk, This is your Home Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// About screen component
function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello Biruk, This is your About Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        inactiveColor="tan"
        barStyle={{ backgroundColor: 'black' }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2694d4',
    alignItems: 'center',
    justifyContent: 'center',
    },
});
