import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import CardShadow from '../wrapper/CardShadow'

const CategoryItem = ({category}) => {
  return (
    <Pressable onPress={()=>console.log(category)}>
        <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
        </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.red1,
        margin: 10,
        padding: 10,
        width: "80%",
        alignItems: "center",
        justifyContent:"center",
        marginHorizontal: "10%",
    },
    text: {

    }
})