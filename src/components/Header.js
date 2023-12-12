import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/Colors'

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
        backgroundColor: colors.pink1,
    },
    text: {
        fontSize: 30,
        color: "white",
    },
})