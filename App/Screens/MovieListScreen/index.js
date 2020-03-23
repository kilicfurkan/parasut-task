import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'

import TabBar from '../../Components/UI/TabBar'

import MovieActions from '../../Redux/MovieRedux'

import styles from './styles'

class MovieListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Daily'
    }
  }

  componentDidMount() {
    this.props.getDailyTrendingMovies()
    this.props.getWeeklyTrendingMovies()
  }

  handleChangeTab = (selectedTab) => {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state
    console.log(this.props.movie)
    
    return (
      <SafeAreaView>
        <TabBar
          tabs={tabs}
          selectedTab={selectedTab}
          onPress={this.handleChangeTab}
        />
      </SafeAreaView>
    )
  }
}

mapStateToProps = state => {
  const { movie } = state

  return { movie }
}

mapDispatchToProps = {
  getDailyTrendingMovies: MovieActions.getDailyTrendingMoviesInProgress,
  getWeeklyTrendingMovies: MovieActions.getWeeklyTrendingMoviesInProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListScreen)

const tabs = ['Daily', 'Weekly']