import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const TabIcon = ({icon, tab, focused}) => {
  return (
    <View style={styles.container}>
      <AntDesign name={icon} size={24} color={focused ? "white" : "grey"} />
      <Text style={{...styles.text, ...{color: focused ? "white" : "grey" }}}>{tab}</Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    text: {
        color: "white",
        textAlign: "center",
    }
})