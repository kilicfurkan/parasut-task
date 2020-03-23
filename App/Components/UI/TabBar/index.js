import React from 'react'
import { View } from 'react-native'
import Tab from './Tab'

import styles from './styles'

const TabBar = ({ tabs, selectedTab, onPress }) => (
  <View style={styles.tabBar}>
    {tabs.map(tab => (
      <Tab
        title={tab}
        isSelected={tab == selectedTab}
        onPress={onPress}
      />
    ))}
  </View>
)

export default TabBar