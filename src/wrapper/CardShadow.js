import { StyleSheet, Text, View } from 'react-native'


const CardShadow = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default CardShadow

const styles = StyleSheet.create({
    container: {
        shadowColor: "black",
        shadowOffset: {
            height: 5,
            width: 3,
        },
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})