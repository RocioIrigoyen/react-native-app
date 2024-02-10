import { FlatList, StyleSheet, View, Text, Button, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import Goback from '../components/Goback'
import { useGetProductsQuery } from '../app/services/shopService'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import { colors } from '../global/colors'


const ItemListCategory = ({navigation, route}) => {
  const {category} = route.params
  const {data, isLoading, error} = useGetProductsQuery(category)
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] =useState()
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    if(!isLoading) {
      const dataArray = Object.values(data)
      const productsFiltered = dataArray.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
      setLoading(false)
    }
  }, [keyword, data])  

  if(loading) return <LoadingSpinner/>
  
  return (
    <>
      <Goback navigation={navigation} route={route}/>
      <Search onSearch={setKeyword}/>
      <View style={styles.container}>
        <FlatList
        style={styles.list}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductItem  item = {item} navigation={navigation} route={route}/>}
        />
      </View>
    </>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingBottom: "25%",
    backgroundColor: colors.green1
  },
  list: {
    width: "100%"
  }
})