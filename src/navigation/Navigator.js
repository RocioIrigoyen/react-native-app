import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet} from 'react-native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { colors } from '../global/colors'
import OrdersStack from './OrdersStack'
import TabIcon from '../components/TabIcon'
import MyProfileStack from './MyProfileStack'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
      >
        <Tab.Screen 
          name="ShopStack" 
          component={ShopStack} 
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="home" tab="Tienda" focused={focused}/>
          }}
        />
        <Tab.Screen 
          name="CartStack" 
          component={CartStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="shoppingcart" tab="Carrito" focused={focused}/>
          }}
        />
        <Tab.Screen 
          name="OrdersStack" 
          component={OrdersStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="bars" tab="Pedidos" focused={focused}/>
          }}
        />
        <Tab.Screen 
          name="MyProfileStack" 
          component={MyProfileStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="user" tab="Perfil" focused={focused}/>
          }}
        />
      </Tab.Navigator>
  )
}

export default Navigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.violet1,
    shadowColor: "black",
    elevation: 4,
    position: "absolute",
    height: 90,
  }
})