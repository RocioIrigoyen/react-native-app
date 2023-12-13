import { StyleSheet, View, Pressable, TextInput } from 'react-native'
import { useState } from 'react'
import { colors } from '../global/colors'
import {AntDesign} from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons'



const Search = ({onSearch}) => {

    const [input, setInput] = useState("")

    const searchInput = () => {
        onSearch(input)
    }

    const removeInput = () => {
        setInput("")
    }
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input} 
        value={input}
        onChangeText={setInput}
        placeholder='Buscar producto...'
        />
      <Pressable onPress={searchInput}>
        <AntDesign name="search1" size={24} color="black" />
      </Pressable>
      <Pressable onPress={removeInput}>
        <MaterialIcons name="cancel" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        width: "90%",
    },
    input: {
        color: "white",
        backgroundColor: colors.violet1,
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        width: "80%",
        fontSize: 20,
        borderColor: colors.yellow1,
    }
})