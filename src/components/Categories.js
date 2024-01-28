import { FlatList, StyleSheet, View, Text } from 'react-native'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../app/services/shopService'
import { colors } from '../global/colors'
import Logo from './Logo'


const Categories = ({navigation, route}) => {

const {data: categories, isLoading} = useGetCategoriesQuery()  

  return (
    <View style={styles.container}>
        <Logo/>
        <View style={styles.containerText}>
          <Text style={styles.text}>¡Te damos la bienvenida a Manga Town! Elegí el género que querés explorar y descubrí nuestra colección de comics para descargar</Text>
        </View>
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
    marginBottom: "15%",
    backgroundColor: colors.green1
  },
  containerText: {
    width: "90%",
    justifyContent:"center",
    alignItems: "center",
    margin: 20
  },
  text: {
    color: colors.violet1,
    fontSize: 20,
    fontFamily: "Afacad"
  }
})