import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions} from 'react-native'
import { useState, useEffect } from 'react'
import { colors } from '../global/colors'
import Goback from '../components/Goback'
import { useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/shop/cartSlice'
import { useGetProductQuery } from '../app/services/shopService'
import LoadingSpinner from '../components/LoadingSpinner'
import Toast from 'react-native-toast-message'



const ItemDetail = ({navigation, route}) => {
  const dispatch = useDispatch(addItem)
  const productId = useSelector((state) => state.shop.value.productSelected.id)
  const { data: product, isLoading, isError } = useGetProductQuery(productId)
  
  
  const {width, height} = useWindowDimensions()
  const [landscape, setLandscape] = useState(false)
 
 
  useEffect (()=>{
    if (width > height) {
      setLandscape(true)
    } else {
      setLandscape(false)
    }
  }, [width, height])


  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: `Agregaste ${product.title} al carrito`,
      visibilityTime: 2500,
      autoHide: true,
    })
  }

  
  if(isLoading) return <LoadingSpinner/>

  return (
    <>
      <Goback navigation={navigation} route={route}/>
      <View style={landscape ? styles.containerLandscape : styles.container}>
        <Image
        style={landscape ? styles.imageLandscape : styles.image}
        resizeMode='cover'
        source={{uri: product.thumbnail}}/>
        <View style={landscape ? styles.textContainerLandscape : styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>

        <View style={landscape ? styles.priceContainerLandscape : styles.priceContainer}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}             
            onPress={() => {
              dispatch(addItem(product))
              showToast()
            }}>
          <Text>Agregar al carrito</Text>
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
    marginVertical: 20
  },
  containerLandscape: {
    flexDirection: "row",
    alignItems: "center",
    gap:10,
    marginVertical: 15,
  },
  image: {
    width: 300,
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

  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
})