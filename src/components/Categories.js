import { FlatList, StyleSheet, View } from 'react-native'
import CategoryItem from './CategoryItem'
import { useSelector} from 'react-redux'

const Categories = ({navigation, route}) => {

  const categories = useSelector((state) => state.shop.value.categories)
  

  return (
    <View style={styles.container}>
        <FlatList
        style={styles.container}
        data = {categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem category={item} navigation={navigation} route = {route}/> }
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