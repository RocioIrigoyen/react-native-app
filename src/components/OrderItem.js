import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AntDesign} from "@expo/vector-icons"
import { colors } from '../global/colors'

const OrderItem = ({order}) => {
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 
        0
     )
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>id: {order.id}</Text>
        <Text>{new Date(order.createdAt).toLocaleString()}</Text>
        <Text style={styles.text}>Total: ${total} </Text>
      </View>
      <AntDesign name="search1" size={24} color="black" />
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 100,
        backgroundColor: colors.yellow1,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection:"column",
        justifyContent: "flex-start",
        alignItems:"flex-start",
    },
    text: {
        fontSize: 19,
        fontFamily: "Afacad",
        color: "white",
    }
})