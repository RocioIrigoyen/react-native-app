import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from "../data/categories.json"

const Categories = () => {
  return (
    <View style={styles.container}>
        <FlatList
        style={styles.container}
        data = {categories}
        keyExtractor={item => item}
        renderItem={({item}) => <View><Text> {item} </Text></View> }
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex:1,
  }
})