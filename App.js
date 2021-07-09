import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { Earnings } from './src/components/earnings';
import { Login } from './src/components/login';
import { Costs } from './src/components/costs';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Earnings" component={Earnings} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Costs" component={Costs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

