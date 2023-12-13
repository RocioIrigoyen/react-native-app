import { StyleSheet, Text, View } from 'react-native';

import { colors } from './src/global/colors';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import ItemDetail from './src/screens/ItemDetail';
import { useState } from 'react';
import { useFonts } from 'expo-font';


const App = () => {
  const [categorySelected, setCategorySelected] = useState("")
  const [fontLoaded] = useFonts({
    Afacad: require("./assets/fonts/Afacad-Regular.ttf"),
    Lobster: require("./assets/fonts/Lobster-Regular.ttf")
  })

  if (!fontLoaded) return null


  return (
    <View style={styles.container}>
      {categorySelected ? 
      <ItemListCategory category={categorySelected} setCategorySelected={setCategorySelected}/> 
      : 
      <Home setCategorySelected={setCategorySelected}/>}

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
