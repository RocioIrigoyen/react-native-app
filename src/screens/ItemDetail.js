import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemDetail = () => {
  return (
    <View style={styles.container}>
      <Text>ItemDetail</Text>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
})