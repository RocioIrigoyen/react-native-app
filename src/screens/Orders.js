import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import allOrders from "../data/orders.json"
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../app/services/shopService'
import { useSelector } from 'react-redux'

const Orders = () => {
  const localId = useSelector(state => state.auth.value.localId)
  const {data, isLoading, isSuccess,isError,error} = useGetOrdersQuery(localId)
  const [orders,setOrders] = useState([])

  useEffect(()=>{
    if(isSuccess && data ) {
      const orders = Object.keys(data).map(key => data[key])
      setOrders(orders)
    }
    if(isError) console.log(error)
  }, [isSuccess,data,isError,error])

  return (
    <View>
     <FlatList
        style={styles.list}
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item})=> <OrderItem order={item}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})