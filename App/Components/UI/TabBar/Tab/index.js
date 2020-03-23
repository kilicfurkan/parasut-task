import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Tab = ({ title, isSelected, onPress, style }) => (
  <TouchableOpacity
    onPress={() => onPress(title)}
    style={[
      styles.tab, 
      isSelected ? styles.selectedTab : null, 
      style
    ]}
  >
    <Text style={[styles.text, isSelected ? styles.selectedTabText : null]}>{title}</Text>
  </TouchableOpacity>
)

export default Tab