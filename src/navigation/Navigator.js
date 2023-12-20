import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header';

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
        ({route}) => {
            return {
            header: () => {
                return <Header title={
                                    route.name === "Home" ? "Categorias" : 
                                    route.name === "Category" ? route.params.category  :
                                    route.name === "Product" ? "Detalle del producto" :
                                    "Otra pantalla" 
                                    } />
            }
            }
        }
        }>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Category" component={ItemListCategory} />
                <Stack.Screen name="Product" component={ItemDetail} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

