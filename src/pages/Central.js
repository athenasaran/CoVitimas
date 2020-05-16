import * as WebBrowser from 'expo-web-browser';
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class Central extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Text>Central</Text>
    </View>
  );
}}

Central.navigationOptions = {
  header: null,
};

export default Central;