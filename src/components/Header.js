import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header = ({title = "Categorias"}) => {
  return (
    <View style={styles.container}>
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
    text: {
        fontSize: 30,
        color: "white",
        fontFamily:"Lobster",
    },
})