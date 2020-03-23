import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'

const Card = ({ data }) => (
  <View style={styles.card}>
    <Image
      style={styles.image}
      source={{ uri: `http://image.tmdb.org/t/p/w185/${data.poster_path}` }}
    />
    <View style={styles.titleContainer}>
      <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
    </View>
  </View>
)

export default Card