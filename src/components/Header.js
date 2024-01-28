import { Pressable, StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';
import { deleteAllSession, deleteSession } from '../database';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { useGetProfileImageQuery} from '../app/services/shopService'


const Header = ({title = "Categorias"}) => {

  const {width, height} = useWindowDimensions()  //permite determinar las dimensiones de forma dinámica
  const [landscape, setLandscape] = useState(false)
  const localId = useSelector(state => state.auth.value.localId)
  const {data} = useGetProfileImageQuery(localId)
  const dispatch = useDispatch()
 
  useEffect (()=>{
    if (width > height) {
      setLandscape(true)
    } else {
      setLandscape(false)
    }
  }, [width, height])
  
  const onLogOut = () => {
    deleteAllSession().then(result => console.log(result))
    dispatch(clearUser())
  }

  return (
    <View style={landscape ? styles.containerLandscape : styles.container}>
      <Text style={styles.text}>{title}</Text>
      
      <Image source={data ? {uri: data.image} : require("../../assets/user.jpg")} style= {styles.image} resizeMode='cover'/>
      { localId && (
            <Pressable style={styles.logOut} onPress={onLogOut}>
              <AntDesign name="logout" size={24} color="white" />
            </Pressable>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.violet1,
    },
    containerLandscape: {
      height: 40,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.violet1,
    },
    text: {
        fontSize: 30,
        color: "white",
        fontFamily:"Lobster",
    },
    logOut: {
      position: "absolute",
      right: 10
    },
    image: {
      width: 50,
      height: 50,
      left: 10,
      position: "absolute",
      borderRadius: 30
    }
})