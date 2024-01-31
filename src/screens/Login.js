import { Pressable, StyleSheet, Text, View} from 'react-native'
import React, { useState, useEffect } from 'react'
import InputForm from "../components/InputForm"
import SubmitButton from '../components/SubmitButton'
import { colors } from '../global/colors'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { insertSession } from '../database'
import Logo from '../components/Logo'
import LoadingSpinner from '../components/LoadingSpinner'
import { loginSchema } from '../validations/loginSchema'

const Login = ({navigation}) => {
    const dispatch = useDispatch()
    const [triggerLogIn, {data, isError, isSuccess,error,isLoading}] = useLoginMutation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [loginError, setLoginError] = useState("")

    useEffect(()=>{
        if(isSuccess) {
            dispatch(setUser(data))
            insertSession(data)
            .then(result => console.log(result))
            .catch(err => console.log(err))
        }
        if (isError) {
            if (error && error.data && error.data.error && error.data.error.errors) {
                const errorArray = error.data.error.errors;
                const invalidCredentialsError = errorArray.find(e => e.message === "INVALID_LOGIN_CREDENTIALS")

                if (invalidCredentialsError) {
                    setLoginError("Usuario no registrado. Verifica tu mail y contraseña.");
                } else {
                    console.log(error)
                }
            } else if (error && error.data && error.data.error && error.data.error.message) {
                setLoginError(error.data.error.message)
            } else {
                console.log(error)
            }
        }
    },[data,isError,isSuccess])

    const onSubmit = () => {
        try {
            setErrorEmail("")
            setErrorPassword("")
            loginSchema.validateSync({ email, password })
            triggerLogIn({ email, password })
        } catch (error) {
                switch (error.path) {
                    case "email":
                        setErrorEmail(error.message);
                        break
                    case "password":
                        setErrorPassword(error.message);
                        break
                    default:
                        break
                }

        }
    }

    if(isLoading)  return <LoadingSpinner/>
    
  return (
    <View style={styles.main}>
       <Logo/>
      <View style={styles.container}> 
      
        <Text style={styles.title}>Login</Text>
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
            isSecure={true}
        />
        {loginError !== "" && (
          <Text style={styles.errorText}>{loginError}</Text>
        )}
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
    },
    errorText: {
              fontSize: 16,
      fontFamily: "Afacad",
      color: "red",
      marginLeft: 20,
      fontStyle: "italic"
    }
})