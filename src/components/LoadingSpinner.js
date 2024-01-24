import { View, ActivityIndicator } from 'react-native'
import { colors } from '../global/colors'

const LoadingSpinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: "white"}}>
      <ActivityIndicator size={80} color= {colors.violet1} />
    </View>
  )
}

export default LoadingSpinner