import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderColor: Colors.primary,
    borderWidth: 1
  },
  selectedTab: {
    backgroundColor: Colors.primary
  },
  text: {
    color: Colors.primary
  },
  selectedTabText: {
    color: Colors.white
  }
})
