import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from "../components/InputForm"
import SubmitButton from '../components/SubmitButton'
import { colors } from '../global/colors'
import { useSignupMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { signupSchema } from '../validations/signupSchema'
import { insertSession } from '../database'
import Logo from '../components/Logo'

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
        if(isSuccess) {
            dispatch(setUser(data))
            insertSession(data)
            .then(result => console.log(result))
            .catch(err => console.log(err))
        }
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
        <Logo/>
      <View style={styles.container}> 
        <Text style={styles.title}>Registrarse</Text>
        <InputForm
            label= "Email"
            value={email}
            onChangeText={(t)=> setEmail(t)}
            error={errorEmail}
        />
        <InputForm
            label= "Contraseña"
            value={password}
            onChangeText={(t)=> setPassword(t)}
            error={errorPassword}
            isSecure= {true}
        />
 
        <InputForm
            label= "Confirmar Contraseña"
            value={confirmPassword}
            onChangeText={(t)=> setConfirmPassword(t)}
            error={errorConfirmPassword}
            isSecure= {true}
        />
        <SubmitButton
        title= "Enviar"
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
        justifyContent:"space-around",
        alignItems: "center",
        backgroundColor: colors.green1
    },
    container: {
        width: "90%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Donegal"
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