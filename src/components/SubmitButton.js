import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SubmitButton = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    button: {
        width: "60%",
        backgroundColor: colors.yellow1,
        padding: 10,
        borderRadius: 10,
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 18
    }
})