import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { icons, images } from '../constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DFUApp</Text>
      <Image source={images.logo} style={styles.logo} />
      <Image source={icons.back} style={styles.icon} />
      <Text style={styles.text}>This is an example using images and icons.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
});
