import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const InputForm = ({label, value, onChangeText, isSecure, error}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput value={value} onChangeText={onChangeText} style={styles.input} secureTextEntry={isSecure} />
      {error ? <View><Text style={styles.error}>{error}</Text></View> : null}
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%"
    },
    titleInput: {
        width: "90%",
        fontSize: 16,
        fontFamily: "Afacad",
        marginHorizontal: "5%"
    },
    input: {
        width: "90%",
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: colors.violet1,
        padding: 2,
        fontSize: 14,
        fontFamily: "Afacad",
        marginHorizontal: "5%",
        marginVertical: 10
    },
    error: {
      fontSize: 16,
      fontFamily: "Afacad",
      color: "red",
      marginLeft: 20,
      fontStyle: "italic"
    }
})