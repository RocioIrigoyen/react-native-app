import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AntDesign} from "@expo/vector-icons"

const OrderItem = ({item}) => {
  return (
    <View>
      <View>
        <Text>id: {item.id}</Text>
        <Text>Fecha</Text>
        <Text>Total</Text>
      </View>
      <AntDesign name="search1" size={24} color="black" />
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({})