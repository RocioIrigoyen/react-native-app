import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'
import LogStack from './LogStack'



const MainNavigator = () => {
    const [idToken, setIdToken] = useState(null)
  return (
    <NavigationContainer>
        {idToken ? <Navigator/> : <LogStack/>}
    </NavigationContainer>
  )
}

export default MainNavigator

