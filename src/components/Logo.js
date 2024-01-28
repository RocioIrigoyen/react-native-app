import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <Image
    style={styles.image}
    resizeMode='cover'
    source={require("../../assets/logo.png")}/>
  )
}

export default Logo

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 100,
    }
})