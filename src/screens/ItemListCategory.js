import { FlatList, StyleSheet, View, Text, Button, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import allProducts from "../data/products.json"
import ProductItem from '../components/ProductItem'
import Goback from '../components/Goback'

const ItemListCategory = ({category, setCategorySelected, setProductDetailId}) => {

  const [keyword, setKeyword] = useState("")
  const [products, setProducts] =useState([])

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(product => product.category === category)
      const productsFiltered = products.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)

    } else {
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)

    }
  }, [category, keyword]) 
  
  return (
    <>
      <Header/>
      <Goback setVariable={setCategorySelected}/>
      <Search onSearch={setKeyword}/>
      <View style={styles.container}>
        <FlatList
        style={styles.list}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductItem  item = {item} setProductDetailId={setProductDetailId}/>}
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
  },
  list: {
    width: "100%"
  }
})