import { StyleSheet, Text, View, useWindowDimensions} from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'

const Header = ({title = "Categorias"}) => {

  const {width, height} = useWindowDimensions()  //permite determinar las dimensiones de forma dinámica
  const [landscape, setLandscape] = useState(false)
 
  useEffect (()=>{
    if (width > height) {
      setLandscape(true)
    } else {
      setLandscape(false)
    }
  }, [width, height])

  return (
    <View style={landscape ? styles.containerLandscape : styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.violet1,
    },
    containerLandscape: {
      height: 40,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.violet1,
    },
    text: {
        fontSize: 30,
        color: "white",
        fontFamily:"Lobster",
    },
})