import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Goback = ({setVariable}) => {

/*     const cleanSelection = () => {
        setProductDetailId(0)
        setCategorySelected("")
    } */


  return (
    <>
        <Pressable style={styles.goBack} title= "Go back" onPress={() => setVariable("")}>
            <Text style={styles.text}>Volver</Text>
        </Pressable>
    </>
  )
}

export default Goback

const styles = StyleSheet.create({
    goBack: {
        backgroundColor: colors.red1,
        padding: 10,
    },
    text: {
        color: "white"
    }
})