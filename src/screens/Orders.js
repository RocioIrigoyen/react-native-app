import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import allOrders from "../data/orders.json"
import OrderItem from '../components/OrderItem'

const Orders = () => {
  return (
    <View>
     <FlatList
        style={styles.list}
        data={allOrders}
        keyExtractor={item => item.id}
        renderItem={({item})=> <OrderItem item={item}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})