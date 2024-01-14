import { StyleSheet } from 'react-native';
import Games from './src/screens/Games';

const App = () => {
  return (
      <Games />
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
