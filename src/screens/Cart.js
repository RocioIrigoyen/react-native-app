import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native'
import { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import Counter from '../components/Counter'
import { useSelector} from 'react-redux'

const Cart = () => {

  const cartProducts = useSelector((state) => state.cart.value.cartProducts)

  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(()=>{
    const total = cart.reduce((acc,product)=> acc + (product.price * product.quantity), 0)
    setTotalPrice(total)
    setCart(cartProducts)
  },[cart])
  
  return (
    <View style={styles.container}>
      <Counter/>
      <FlatList
        style={styles.list}
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item})=> <CartItem item={item}/>}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.textConfirm}>Confirmar compra</Text>
        </Pressable>
        <Text style={styles.textConfirm}>Total: ${totalPrice}</Text>
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