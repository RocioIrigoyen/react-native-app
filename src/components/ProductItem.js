import { Image, Pressable, StyleSheet, Text, useWindowDimensions} from 'react-native'
import { colors } from '../global/colors'
import { useDispatch} from 'react-redux'
import {setProductSelected} from "../features/shop/shopSlice"

const ProductItem = ({item, navigation, route}) => {
  const {width, height} = useWindowDimensions()
  const dispatch = useDispatch()

  return (
    <Pressable style={styles.container} onPress={() => {
      dispatch(setProductSelected(item.id))
      navigation.navigate("Product", {id: item.id})
      }}>
        <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri: item.thumbnail}}/>
      <Text style={width < 350 ? styles.textMin : styles.text}>{item.title}</Text>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: colors.pink1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 15,
    },
    text: {
        fontFamily: "Afacad",
        fontSize: 20,
        width: "60%",
        textAlign: "center",
        color: "white"
    },
    textMin: {
      fontFamily: "Afacad",
      fontSize: 15,
      width: "60%",
      textAlign: "center",

    },
    image: {
        width: "40%",
        height: 90,
        minWidth: 90,

    }
})