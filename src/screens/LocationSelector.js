import { StyleSheet, Text, View, Image } from 'react-native'
import {React, useEffect,useState} from 'react'
import { colors } from '../global/colors'
import * as Location from 'expo-location'
import MapPreview from '../components/MapPreview'
import { usePostUserLocationMutation } from '../app/services/shopService'
import { useSelector } from 'react-redux'
import AddButton from '../components/AddButton'
import { googleApi } from '../firebase/googleApi'


const LocationSelector = ({navigation}) => {

    const localId = useSelector(state => state.auth.value.localId)
    const [location, setLocation] = useState({latitude: "", longitude: ""})
    const [errorMsg, setErrorMsg] = useState("")
    const [address, setAddress] = useState("")
    const [triggerPostUserLocation,{data,isSuccess,isError,error}] = usePostUserLocationMutation()


  

    const confirmAddress = async () => {

      try {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address
        }
        const data = await triggerPostUserLocation({location: locationFormatted, localId: localId})
        console.log(data)
        navigation.goBack()
        
      } catch (error) {
        setErrorMsg(error.message)
      }

    }

    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
      })();  //esto hace que la función se ejecute automaticamente
    }, []);

    
    useEffect(() => {
      (async () => {
        try {
          if(location.latitude) {
            const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`
            const response = await fetch(url_reverse_geocode)
            const data = await response.json()
            setAddress(data.results[0].formatted_address)
          }
        } catch (error) {
          setErrorMsg(error.message)
        }
      })()
    }, [location])
    
   

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Direccion: {address}</Text>


       {location ? (
    
        <View style={styles.noLocationContainer}>

            <MapPreview location={location}/>

            <AddButton title="Guardar ubicación" onPress={confirmAddress}/>
        </View>

        
      ) : (
        <>
            <View style={styles.noLocationContainer}>
                <Text>{errorMsg}</Text>
            </View>
        </>
      )} 

    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        gap: 20,
        paddingBottom: 130,
        backgroundColor: colors.green1

    },
    noLocationContainer: {
        borderWidth: 2,
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
        borderColor: colors.violet1
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