import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputForm from "../components/InputForm"
import SubmitButton from '../components/SubmitButton'
import { colors } from '../global/colors'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'

const Login = ({navigation}) => {
    const dispatch = useDispatch()
    const [triggerLogIn, {data, isError, isSuccess,error,isLoading}] = useLoginMutation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        if(isSuccess) dispatch(setUser(data))
        if (isError) console.log(error)
    },[data,isError,isSuccess])

    const onSubmit = () => {
        triggerLogIn({email,password})
    }

  return (
    <View style={styles.main}>
      <View style={styles.container}> 
        <Text style={styles.title}>Login</Text>
        <InputForm
            label= "Email"
            value={email}
            onChangeText={(t)=> setEmail(t)}
            error=""
        />
        <InputForm
            label= "Password"
            value={password}
            onChangeText={(t)=> setPassword(t)}
            error=""
            isSecure={true}
        />

        <SubmitButton
        title= "Send"
        onPress={onSubmit}
        />
        <Text style={styles.sub}>¿No tenés una cuenta?</Text>
        <Pressable  onPress={()=> navigation.navigate("SignUp")}>
            <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main : {
        width: "100%",
        height: "100%",
        justifyContent:"center",
        alignItems: "center"
    },
    container: {
        width: "90%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: colors.pink1,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Lobster"
    },
    sub: {
        fontSize: 14,
        fontFamily: "Afacad",
        color: "black"
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Afacad",
        color: "blue"
    }
})