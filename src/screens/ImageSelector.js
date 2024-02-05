import { StyleSheet, Image, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AddButton from '../components/AddButton'
import * as ImagePicker from 'expo-image-picker'
import { usePostProfileImageMutation, useGetProfileImageQuery } from '../app/services/shopService'
import { useSelector } from 'react-redux'
import { colors } from '../global/colors'
import LoadingSpinner from '../components/LoadingSpinner'

const ImageSelector = ({navigation}) => {

    const [image, setImage] = useState()
    const [triggerProfileImage, {isError, error, isLoading}] = usePostProfileImageMutation()
    const localId = useSelector(state => state.auth.value.localId)
    const {data, isSuccess} = useGetProfileImageQuery(localId)

    useEffect(() => {
        if(isSuccess && data) setImage(data.image)
    }, [isSuccess])

    if(isLoading)  return <LoadingSpinner/>
    const pickImage = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted) {
            return false
        } else {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.3,
                base64: true
              });
                 
              if (!result.canceled) {
                setImage('data:image/jpeg;base64,' + result.assets[0].base64)
              }
        }

      }

    const pickImageFromGallery = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.3,
        base64: true
      });

      if (!result.canceled) {
        setImage('data:image/jpeg;base64,' + result.assets[0].base64);
      }
    }
    

    const confirmImage = () => {
        triggerProfileImage({image,localId})
        navigation.goBack()
    }

  return (
    <View style={styles.container}>
      <Image
            source={image ? {uri: image} : require("../../assets/user.jpg")}
            style= {styles.image}
            resizeMode='cover'
       />
      <AddButton title="Sacar foto" onPress={pickImage}/>
      <AddButton title="Abrir galería" onPress={pickImageFromGallery}/>
      <Image source={require("../../assets/logomtsmall.png")} style={styles.image} resizeMode="cover"/>
      <AddButton  title="Confirmar cambios" onPress={confirmImage} backgroundColor={colors.pink1}/>
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        paddingTop:40,
        backgroundColor: colors.green1
    },
    image: {
        width: 200,
        height: 200
    }
})