import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet, Button } from 'react-native';
import Styles from './styles';
import { TabNavigator } from 'react-navigation';

class Home extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.homeContainer}>
        <Text style={Styles.fastFilmText}>
          Welcome To Fast Film!
        </Text>
      </View>
    )
  }
}

export default Home;
