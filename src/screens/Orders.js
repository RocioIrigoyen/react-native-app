import { Text, View, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../app/services/shopService'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import { colors } from '../global/colors'

const Orders = () => {
  const localId = useSelector(state => state.auth.value.localId)
  const {data, isLoading, isSuccess,isError,error} = useGetOrdersQuery(localId)
  const [errorMessage,setErrorMessage] = useState("")
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    if(isError && error) setErrorMessage(error.error)
    if(isSuccess && data) setLoading(false)
  }, [isSuccess,data,isError,error]) 


  if(errorMessage)  return <View><Text style={styles.textContainer}>Error al cargar</Text></View>
  if(loading)  return <LoadingSpinner/>
  return (

    <View style={styles.container}>
    {data.length === 0 ? (
      <Text style={styles.textContainer}>No hay órdenes para mostrar</Text>
    ) : (
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem order={item}/>}
      />
    )}
  </View>

  )
}

export default Orders

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.green1,
    gap: 10,
    marginBottom: "15%",
  },
  text: {
    fontFamily: "Afacad",
    fontSize: 20,
    color: colors.violet1
  },
  textContainer: {
    color: colors.violet1,
    marginTop: "50%",
    padding: 20,
    fontSize: 35,
    fontFamily: "Afacad",
    textAlign: "center"
  }
})