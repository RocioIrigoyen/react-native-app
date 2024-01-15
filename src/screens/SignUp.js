import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from "../components/InputForm"
import SubmitButton from '../components/SubmitButton'
import { colors } from '../global/colors'
import { useSignupMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { signupSchema } from '../validations/signupSchema'

const SignUp = ({navigation}) => {
    const dispatch = useDispatch()
    const [triggerSignUp, {data, isError, isSuccess,error,isLoading}] = useSignupMutation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

    useEffect(()=>{
        if(isSuccess) dispatch(setUser(data))
        if (isError) console.log(error)
    },[data,isError,isSuccess])

    const onSubmit = () => {
        try {
            setErrorEmail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            signupSchema.validateSync({email,password,confirmPassword})
            triggerSignUp({email,password})
        } catch (error) {
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    break;
                case "password":
                    setErrorPassword(error.message)
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(error.message)
                    break;
            
                default:
                    break;
            }
        }
    }

  return (
    <View style={styles.main}>
      <View style={styles.container}> 
        <Text style={styles.title}>Sign Up</Text>
        <InputForm
            label= "Email"
            value={email}
            onChangeText={(t)=> setEmail(t)}
            error={errorEmail}
        />
        <InputForm
            label= "Password"
            value={password}
            onChangeText={(t)=> setPassword(t)}
            error={errorPassword}
            isSecure= {true}
        />
 
        <InputForm
            label= "Confirm Password"
            value={confirmPassword}
            onChangeText={(t)=> setConfirmPassword(t)}
            error={errorConfirmPassword}
            isSecure= {true}
        />
        <SubmitButton
        title= "Send"
        onPress={onSubmit}
        />
        <Text style={styles.sub}>¿Tenés una cuenta?</Text>
        <Pressable onPress={()=> navigation.navigate("Login")}>
            <Text style={styles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignUp

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