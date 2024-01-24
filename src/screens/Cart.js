import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native'
import { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector, useDispatch} from 'react-redux'
import { usePostOrdersMutation } from '../app/services/shopService'
import { emptyCart } from '../features/shop/cartSlice'
import LoadingSpinner from '../components/LoadingSpinner'

const Cart = () => {

  const cart = useSelector((state) => state.cart.value)
  const localId = useSelector(state => state.auth.value.localId)
  const [triggerPostOrder, {data,isSuccess,error,isError, isLoading}] = usePostOrdersMutation()
  const dispatch = useDispatch(emptyCart)
  const [info,setInfo] = useState(true)
  const [errorMessage,setErrorMessage] = useState("")


  useEffect(()=>{
    if(isSuccess && cart.items.length === 0 ) setInfo(false) // ver
    if(isError && error) setErrorMessage(error.error)
  },[isSuccess,cart,isError,error]) 

  if(!info) return <View><Text>Carrito vacío</Text></View>
  if(errorMessage)  return <View><Text>Error al cargar</Text></View>
  if(isLoading)  return <LoadingSpinner/>

  const buyAndDelete = () => {
    triggerPostOrder({localId, order:cart})
    dispatch(emptyCart())
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cart.items}
        keyExtractor={item => item.id}
        renderItem={({item})=> <CartItem item={item}/>}
      />
      <View>
        <Pressable style={styles.deleteButton} onPress={()=> dispatch(emptyCart())}>
          <Text style={styles.textConfirm}>Vaciar carrito</Text>
        </Pressable>
      </View>
      <View style={styles.confirmContainer}>
        <Pressable onPress={()=> buyAndDelete()}>
          <Text style={styles.textConfirm}>Confirmar compra</Text>
        </Pressable>
        <Text style={styles.textConfirm}>Total: ${cart.total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom: 130,
    backgroundColor: colors.yellow1,
    gap: 10
  },
  list: {
    width: "100%",
  },
  confirmContainer: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width: "100%",
    padding: 15,
    backgroundColor: "grey",
  },
  textConfirm: {
    color: "white",
    fontFamily: "Afacad",
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: colors.pink1,
    justifyContent: "center",
    alignitems: "center",
    width: "60%",
    padding: 10,
    borderRadius: 10,
    margin: 30
  }
})