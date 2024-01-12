import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator()

const LogStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='SignUp'
    screenOptions={
    ({route}) => {
        return {
            header: () => {
                return <Header title= "Te damos la bienvenida"/>
            }
        }
    }
    }>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default LogStack

