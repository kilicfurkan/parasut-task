import React from 'react'
import { View, FlatList } from 'react-native'
import Card from '../../Components/UI/Card'

import styles from './styles'

const MovieList = ({ data }) => (
  <View style={styles.movieListContainer}>
    <FlatList
      data={data}
      contentContainerStyle={styles.flatListContainer}
      columnWrapperStyle={styles.flatListWrapperStyle}
      numColumns={2}
      renderItem={({ item }) => <Card data={item} />}
    />
  </View>
)

export default MovieList