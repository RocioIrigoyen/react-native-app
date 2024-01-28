import { StyleSheet, View, Pressable, TextInput, Text } from 'react-native'
import { useState } from 'react'
import { colors } from '../global/colors'
import {AntDesign} from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons'



const Search = ({onSearch}) => {

    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const searchInput = () => {
        const expression = /\d/
        if (expression.test(input)) {
            setError("Solo busque letras")
        } else {
            setError("")
            onSearch(input) 
        }
    }

    const removeInput = () => {
        setInput("")
        setError("")
    }
  return (
    <View style={{backgroundColor: colors.green1}}>
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
        {error ? <Text style={styles.errorText}>{error}</Text>: null}
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
        backgroundColor: colors.green1
    },
    input: {
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        width: "80%",
        fontSize: 20,
        borderColor: colors.yellow1,
    },
    errorText: {
        color: colors.red1,
        padding: 10,
    }
})