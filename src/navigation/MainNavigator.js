import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'
import LogStack from './LogStack'
import { useSelector } from 'react-redux'



const MainNavigator = () => {
  
  const idToken = useSelector(state => state.auth.value.idToken)

  return (
    <NavigationContainer>
        {idToken ? <Navigator/> : <LogStack/>}
    </NavigationContainer>
  )
}

export default MainNavigator

