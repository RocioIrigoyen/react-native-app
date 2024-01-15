import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector'


const Stack = createNativeStackNavigator()

const MyProfileStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='MyProfile'
    screenOptions={
    ({route}) => {
        return {
            header: () => {
                return <Header title= "Mi Perfil"/>
            }
        }
    }
    }>
        <Stack.Screen name="My Profile" component={MyProfile} />
        <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  )
}

export default MyProfileStack