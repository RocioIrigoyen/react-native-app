import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from "../data/categories.json"
import CategoryItem from './CategoryItem'

const Categories = ({setCategorySelected}) => {
  return (
    <View style={styles.container}>
        <FlatList
        style={styles.container}
        data = {categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem setCategorySelected={setCategorySelected} category={item}/> }
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