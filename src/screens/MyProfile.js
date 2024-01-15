import { Image, StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'
import AddButton from '../components/AddButton'
import { useGetProfileImageQuery } from '../app/services/shopService'
import { useSelector } from 'react-redux'

const MyProfile = ({navigation}) => {


    const localId = useSelector(state => state.auth.value.localId)
    const {data} = useGetProfileImageQuery(localId)
    
  return (
    <View style={styles.container}>

        <Image
        source={data ? {uri: data.image} : require("../../assets/user.jpg")}
        style= {styles.image}
        resizeMode='cover'
        />
      <AddButton title="Cambiar la foto de perfil" onPress={()=> navigation.navigate("ImageSelector")}/>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image: {
        width: 200,
        height: 200
    }
})