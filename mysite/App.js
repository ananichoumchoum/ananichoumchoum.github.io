import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './screens/Home';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MyComponent;