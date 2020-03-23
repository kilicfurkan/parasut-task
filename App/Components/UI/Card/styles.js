import { StyleSheet } from 'react-native'
import { Colors, Metrics } from 'App/Theme'

export default StyleSheet.create({
  card: {
    width: Metrics.screenWidth / 2.2,
    height: Metrics.screenWidth / 1.5,
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  image: {
    width: Metrics.screenWidth / 2.2,
    aspectRatio: 2 / 2.5
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    textAlign: 'center',
  }
})
