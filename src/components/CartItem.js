import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { Entypo } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/shop/cartSlice'

const CartItem = ({item}) => {

  const dispatch = useDispatch(removeItem)
  return (
    <View style = {styles.card}>
      <View style={styles.textContainer}>
        <Text style= {styles.text}>{item.title}</Text>
        <Text style= {styles.text2}>{item.director}</Text>
        <Text style= {styles.text}>${item.price}</Text>
        <Text style= {styles.text}>Cantidad: {item.quantity}</Text>
      </View>
      <Image source={{ uri: item.images }} style={styles.itemImage} />
       <Pressable onPress={()=> dispatch(removeItem(item))}>
         <Entypo name="trash" size={24} color="white" />
       </Pressable>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 100,
        backgroundColor: colors.pink1,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "50%",
        flexDirection:"column",
        justifyContent: "flex-start",
        alignItems:"flex-start",
    },
    text: {
        fontSize: 19,
        fontFamily: "Afacad",
        color: "white",
    },
    text2: {
        fontSize: 14,
        color: "white",
    },
    itemImage: {
      width: 60, 
      height: 60, 
      borderRadius: 10,
    },
})