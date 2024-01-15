import React from 'react';
import { StyleSheet, View } from 'react-native';
import Games from './src/screens/Games';

const App = () => {
  return (
    <View style={styles.container}>
      <Games />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1b1b1b',
    flex: 1,
  }
});
