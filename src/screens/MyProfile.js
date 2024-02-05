import { Image, StyleSheet, Text, View} from 'react-native'
import {useState} from 'react'
import AddButton from '../components/AddButton'
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../app/services/shopService'
import { useSelector } from 'react-redux'
import { colors } from '../global/colors'

const MyProfile = ({navigation}) => {


    const localId = useSelector(state => state.auth.value.localId)
    const {data} = useGetProfileImageQuery(localId)
    const {data: location} = useGetUserLocationQuery(localId)
    
  return (
    <View style={styles.container}>

        <Image
        source={data ? {uri: data.image} : require("../../assets/user.jpg")}
        style= {styles.image}
        resizeMode='cover'
        />
      <View style={styles.containerText}>
        <Text style={styles.text}>Dirección de envío: {location?.address}</Text>
      </View>
      <AddButton title="Cambiar la foto de perfil" onPress={()=> navigation.navigate("ImageSelector")}/>
      <AddButton title={location ? "Cambiar mi dirección" : "Agregar dirección de envío"} onPress={()=> navigation.navigate("LocationSelector")}/>
      <Image source={require("../../assets/logomtsmall.png")} style={styles.image} resizeMode="cover"/>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        paddingTop:40,
        backgroundColor: colors.green1,
        gap: 10
    },
    image: {
        width: 200,
        height: 200
    },
    containerText: {
      width: "95%",
    },
    text: {
      color: colors.violet1,
      fontSize: 20,
      fontFamily: "Afacad"
    }
})