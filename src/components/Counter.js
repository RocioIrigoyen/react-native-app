import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice'

const Counter = () => {
    
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(0)

  
    return (
    <View style={styles.container}>
      <Button title="Sumar" onPress={() => dispatch(increment())}/>
      <Text>{count}</Text>
      <Button title="Restar" onPress={() => dispatch(decrement())}/>
      <Button title="Borrar" onPress={()=> dispatch(reset())}/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="0" onChangeText={(t)=> setAmount(parseInt(t))}/>
        <Button title="Agregar" onPress={()=> dispatch(incrementByAmount(amount))}/>

      </View>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 15,
        justifyContent:"space-around",
        alignItems: "center",
    },
    inputContainer: {
        gap: 10,
    },
    input: {
        borderWidth: 2,
    },
})