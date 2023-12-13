import { StyleSheet, Text, View } from 'react-native';

import { colors } from './src/global/colors';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import ItemDetail from './src/screens/ItemDetail';


const App = () => {
  return (
    <View style={styles.container}>
      <ItemListCategory/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink1,
    alignItems: 'center',
    justifyContent: 'start',
  },
});

export default App
