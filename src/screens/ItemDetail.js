import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import allProducts from "../data/products.json"
import { useState, useEffect } from 'react'
import { colors } from '../global/colors'
import Goback from '../components/Goback'

const ItemDetail = ({navigation, route}) => {
  const {id} = route.params
  const {width, height} = useWindowDimensions()
  const [landscape, setLandscape] = useState(false)
 
  useEffect (()=>{
    if (width > height) {
      setLandscape(true)
    } else {
      setLandscape(false)
    }
  }, [width, height])

  const [product, setProduct] = useState({})

  useEffect(() => {
    
    const productFound = allProducts.find((product) => product.id === id) 

    setProduct(productFound)
  }, [id])


  return (
    <>
      <Goback navigation={navigation} route={route}/>
      <View style={landscape ? styles.containerLandscape : styles.container}>
        <Image
        style={landscape ? styles.imageLandscape : styles.image}
        source={{uri: product.thumbnail}}
        resizeMode='cover'
        />

        <View style={landscape ? styles.textContainerLandscape : styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>

        <View style={landscape ? styles.priceContainerLandscape : styles.priceContainer}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
          <Text>Comprar</Text>
          </Pressable>
        </View>
       


      </View>
    </>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center",
  },
  containerLandscape: {
    flexDirection: "row",
    alignItems: "center",
    gap:10,
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: 300,
  
  },
  imageLandscape: {
    width: "30%",
    height: 200,
  },
  textContainer: {
    gap: 30,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  textContainerLandscape: {
    width: "30%",
    flexDirection:"column",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"

  },
  price: {
    fontSize: 30,
  },
  buyNow: {
    backgroundColor: colors.yellow1,
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 5,
  },
  priceContainer: {
    flexDirection:"row",
    width: "100%",
    justifyContent:"space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  priceContainerLandscape: {
    width: "30%",
    flexDirection:"column",

  }
})