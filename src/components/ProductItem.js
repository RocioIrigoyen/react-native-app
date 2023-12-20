import { Image, Pressable, StyleSheet, Text, useWindowDimensions} from 'react-native'
import {useEffect, useState} from 'react'
import { colors } from '../global/colors'

const ProductItem = ({item, setProductDetailId}) => {
  const {width, height} = useWindowDimensions()

  return (
    <Pressable style={styles.container} onPress={() => setProductDetailId(item.id)}>
        <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri: item.thumbnail}}/>
      <Text style={width < 350 ? styles.textMin : styles.text}>{item.title}</Text>
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 30,
    },
    text: {
        fontFamily: "Afacad",
        fontSize: 20,
        width: "60%",
        textAlign: "center",
    },
    textMin: {
      fontFamily: "Afacad",
      fontSize: 15,
      width: "60%",
      textAlign: "center",

    },
    image: {
        width: "40%",
        height: 90,
        minWidth: 90,

    }
})