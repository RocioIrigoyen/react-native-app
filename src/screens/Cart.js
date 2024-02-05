import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native'
import { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector, useDispatch} from 'react-redux'
import { usePostOrdersMutation } from '../app/services/shopService'
import { emptyCart } from '../features/shop/cartSlice'
import LoadingSpinner from '../components/LoadingSpinner'
import Toast from 'react-native-toast-message'

const Cart = () => {

  const cart = useSelector((state) => state.cart.value)
  const localId = useSelector(state => state.auth.value.localId)
  const [triggerPostOrder, {data,isSuccess,error,isError, isLoading}] = usePostOrdersMutation()
  const dispatch = useDispatch(emptyCart)
  const [errorMessage,setErrorMessage] = useState("")


  useEffect(()=>{
    if(isError && error) setErrorMessage(error.error)
  },[isSuccess,cart,isError,error]) 

  if(errorMessage)  return <View><Text>Error al cargar</Text></View>
  if(isLoading)  return <LoadingSpinner/>

  const buyAndDelete = () => {
    triggerPostOrder({localId, order:cart})
    dispatch(emptyCart())
  }

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: `¡Tu compra se realizó con éxito!`,
      visibilityTime: 2500,
      autoHide: true,
    })
  }
  
  const showToastEmpty = () => {
    Toast.show({
      type: 'info',
      text1: `Has vaciado el carrito`,
      visibilityTime: 2500,
      autoHide: true,
    })
  }

  return (
    <View style={styles.container}>

      {cart.items.length === 0 ? (
              <View style={styles.emptyCartMessage}>
                <Text style={styles.emptyCartMessageText}>Todavía no agregaste nada al carrito</Text>
              </View>
            ) : (
              <FlatList
                style={styles.list}
                data={cart.items}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CartItem item={item} />}
              />
      )}


         {cart.items.length > 0 && (
          <>
            <View style={styles.confirmContainer}>
                  <Text style={styles.textConfirm}>Total: ${cart.total}</Text>
            </View>
          <View style={styles.confirmContainer}>
            <Pressable  onPress={()=> 
              {dispatch(emptyCart()) 
              showToastEmpty()}}>
              <Text style={styles.textConfirm}>Vaciar carrito</Text>
            </Pressable>
             <Pressable style={styles.button} 
             onPress={()=> 
             {buyAndDelete()
             showToast()}}>
                <Text style={styles.textConfirm}>Confirmar compra</Text>
              </Pressable>
              </View>
            </>
         )}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom: 70,
    backgroundColor: colors.green1,
    gap: 10,
  },
  list: {
    width: "100%",
  },
  confirmContainer: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"flex-start",
    width: "100%",
    padding: 10,
    gap: 80,
    backgroundColor: "grey",
  },
  textConfirm: {
    color: "white",
    fontFamily: "Afacad",
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.pink1,
    justifyContent: "center",
    alignitems: "center",
    width: "40%",
    padding: 10,
    borderRadius: 10,
    margin: 20
  },
  emptyCartMessageText:{
    color: colors.violet1,
    fontSize: 35,
    fontFamily: "Afacad",
    textAlign: "center"
  },
  emptyCartMessage: {
    padding: 20,
    marginTop: "50%"
  }
})