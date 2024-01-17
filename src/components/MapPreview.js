import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { googleApi } from '../firebase/googleApi'

const MapPreview = ({location}) => {

    const MapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}
    &zoom=13
    &size=600x300
    &maptype=roadmap
    &markers=color:red%7Clabel:C%7C${location.latitude},${location.longitude}
    &key=${googleApi.mapStatic}`

  return (
    <View style={styles.mapPreview}>
      <Image style={styles.mapImage} source = {location ? { uri: MapPreviewUrl } : require("../../assets/map.jpg")}/>
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center"
  },
  mapImage: {
    height: 300,
    width: 300
  }
})