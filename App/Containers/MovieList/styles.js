import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'
import Metrics from '../../Theme/Metrics'

export default StyleSheet.create({
  movieListContainer: {
    paddingVertical: 10,
  },
  flatListContainer: {
    paddingBottom: Metrics.screenHeight / 10
  },
  flatListWrapperStyle: {
    justifyContent:'space-around',
    marginBottom: 10
  }
})
