import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App2 = createAppContainer(MainNavigator);

export default App2;