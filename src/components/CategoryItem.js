import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import CardShadow from '../wrapper/CardShadow'
import { useDispatch} from 'react-redux'
import {setProductsFilteredByCategory} from "../features/shop/shopSlice"

const CategoryItem = ({category, navigation}) => {
  
  const dispatch = useDispatch()

  return (
    <Pressable onPress={()=> {
      dispatch(setProductsFilteredByCategory(category))
      navigation.navigate("Category", {category})
    }}>
        <CardShadow style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={category === "romance" ? require("../../assets/romance.png") : 
          category === "drama" ? require("../../assets/drama.png") :  
          category === "horror" ? require("../../assets/terror.png") : 
          category === "thriller" ? require("../../assets/thriller.png") : 
          require("../../assets/accion.png") }/>
        </CardShadow>

    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.pink1,
        margin: 10,
        padding: 10,
        width: "80%",
        alignItems: "center",
        justifyContent:"center",
        marginHorizontal: "10%",
    },
    text: {
      fontFamily: "Afacad",
      fontSize: 20,

    },
    image: {
      width: "100%"
    }
})