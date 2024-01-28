import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const OrderItem = ({order}) => {

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{order.updateAt}</Text>
        <Text style={styles.text}>Total: $ {order.total}</Text>
      </View>
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