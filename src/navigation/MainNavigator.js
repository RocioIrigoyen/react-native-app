import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'
import LogStack from './LogStack'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSession } from '../database'
import { setUser } from '../features/auth/authSlice'



const MainNavigator = () => {
  
  const dispatch = useDispatch()
  const idToken = useSelector(state => state.auth.value.idToken)

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession()
        if(session.rows.length){
          const user = session.rows._array[0]
          dispatch(setUser(user))
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  

  return (
    <NavigationContainer>
        {idToken ? <Navigator/> : <LogStack/>}
    </NavigationContainer>
  )
}

export default MainNavigator

