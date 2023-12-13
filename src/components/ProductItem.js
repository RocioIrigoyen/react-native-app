import { Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const ProductItem = ({item}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: colors.yellow1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        marginHorizontal: "10%",
        borderRadius: 5,


    },
    text: {

    }
})