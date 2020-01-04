import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoryEvent from './src/screens/CategoryEvent';
import HomeScreen from './src/screens/HomeScreen';
import DetailEvent from './src/screens/DetailEvent';

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Dumbtick'
    }
  },
  CategoryEvent: {
    screen: CategoryEvent,
    navigationOptions: {
      title: 'Category'
    }
  },
  DetailEvent: {
    screen: DetailEvent,
    navigationOptions: {
      title: 'Detail'
    }
  },
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#FF5555',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:30
    },
  },
});

export default createAppContainer(AppNavigator);