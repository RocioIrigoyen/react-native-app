import { FlatList, StyleSheet, View } from 'react-native'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../app/services/shopService'


const Categories = ({navigation, route}) => {

const {data: categories, isLoading} = useGetCategoriesQuery()  

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