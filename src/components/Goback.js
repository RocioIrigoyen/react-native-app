import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'


const Goback = ({navigation}) => {


  return (
    <>
        <Pressable style={styles.goBack} title= "Go back" onPress={() => navigation.navigate("Home")}>
         <Text style={styles.text}>Volver al inicio</Text>
        </Pressable>
    </>
  )
}

export default Goback

const styles = StyleSheet.create({
    goBack: {
        backgroundColor: colors.violet1,
        padding: 10,
    },
    text: {
        fontFamily: "Afacad",
        color: "white",
        fontSize: 20,
    }
})