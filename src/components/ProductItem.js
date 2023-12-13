import { Image, Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const ProductItem = ({item}) => {
  return (
    <Pressable style={styles.container}>
        <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri: item.thumbnail}}/>
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start"



    },
    text: {
        fontFamily: "Afacad",
        fontSize: 20,

    },
    image: {
        width: 50,
        height: 50,

    }
})