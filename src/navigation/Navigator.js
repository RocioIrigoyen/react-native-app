import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet} from 'react-native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { colors } from '../global/colors'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import OrdersStack from './OrdersStack'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
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
            tabBarIcon: () => <Entypo name="shop" size={24} color="white" />
          }}
        />
        <Tab.Screen 
          name="CartStack" 
          component={CartStack}
          options={{
            tabBarIcon: () => <Feather name="shopping-cart" size={24} color="white" />
          }}
        />
        <Tab.Screen 
          name="OrdersStack" 
          component={OrdersStack}
          options={{
            tabBarIcon: () => <Feather name="list" size={24} color="white" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.violet1,
    shadowColor: "black",
    elevation: 4,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  }
})