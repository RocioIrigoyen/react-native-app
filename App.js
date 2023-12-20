import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { colors } from './src/global/colors';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Navigator from './src/navigation/Navigator';
import { fonts } from './src/global/fonts';


const App = () => {

  const [fontLoaded] = useFonts(fonts)


  if (!fontLoaded) return null


  return (
    <>
      <StatusBar
      backgroundColor={colors.violet1}
      barStyle="default"
      />
      <Navigator/>
    </>

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
