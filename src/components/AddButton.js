import { Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const AddButton = ({title, onPress, backgroundColor = colors.yellow1}) => {

  const buttonStyle = {
    ...styles.button,
    backgroundColor: backgroundColor,
  }

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
    button: {
        width: "70%",
        backgroundColor: colors.yellow1,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        margin: 10,
        paddingVertical:8
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 18
    }
})