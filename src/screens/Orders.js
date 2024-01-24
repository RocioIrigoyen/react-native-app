import { Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../app/services/shopService'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'

const Orders = () => {
  const localId = useSelector(state => state.auth.value.localId)
  const {data, isLoading, isSuccess,isError,error} = useGetOrdersQuery(localId)
  const [info,setInfo] = useState(true)
  const [errorMessage,setErrorMessage] = useState("")
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    if(isSuccess && data.length === 0 ) setInfo(false)
    if(isError && error) setErrorMessage(error.error)
    if(isSuccess && data) setLoading(false)
  }, [isSuccess,data,isError,error]) 

  if(!info) return <View><Text>No hay órdenes</Text></View>
  if(errorMessage)  return <View><Text>Error al cargar</Text></View>
  if(loading)  return <LoadingSpinner/>
  return (

     <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item})=> <OrderItem order={item}/>}
      />

  )
}

export default Orders

