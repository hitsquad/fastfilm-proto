import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator, tabBarOptions, TabBarTop } from 'react-navigation';

import store from '../redux/store';

import { Router } from './Router';

import Home from './Home';
import Settings from './Settings';
import Message from './Message';
import Calendar from './Calendar';
import Browse from './Browse';
import Dashboard from './Dashboard';

console.ignoredYellowBox = ['Warning: BackAndroid']

const App = TabNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings },
  Message: { screen: Message },
  Calendar: { screen: Calendar },
  Browse: { screen: Browse },
  Dashboard: { screen: Dashboard }
},
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }

);

const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 90,
    backgroundColor: 'red'
  }
});

export default App;
