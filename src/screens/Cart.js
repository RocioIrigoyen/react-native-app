import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native'
import { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import Counter from '../components/Counter'
import { useSelector, useDispatch} from 'react-redux'
import { usePostOrdersMutation } from '../app/services/shopService'
import { emptyCart } from '../features/shop/cartSlice'

const Cart = () => {

  const cart = useSelector((state) => state.cart.value)
  const [triggerPostOrder] = usePostOrdersMutation()
  const dispatch = useDispatch(emptyCart)

  const buyAndDelete = () => {
    triggerPostOrder(cart)
    dispatch(emptyCart())
  }
  return (
    <View style={styles.container}>
      <Counter/>
      <FlatList
        style={styles.list}
        data={cart.items}
        keyExtractor={item => item.id}
        renderItem={({item})=> <CartItem item={item}/>}
      />
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
})