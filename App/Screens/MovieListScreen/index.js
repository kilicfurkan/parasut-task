import React from 'react'
import { SafeAreaView, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import MovieList from '../../Containers/MovieList'
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

  renderDailyMovieList = () => {
    const { daily } = this.props.movie.trending

    if (daily.loading) {
      return <ActivityIndicator style={{ flex: 1 }} />
    }

    return <MovieList data={daily.data} />
  }

  renderWeeklyMovieList = () => {
    const { weekly } = this.props.movie.trending

    if (weekly.loading) {
      return <ActivityIndicator style={{ flex: 1 }} />
    }

    return <MovieList data={weekly.data} />
  }

  render() {
    const { selectedTab } = this.state

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TabBar
          tabs={tabs}
          selectedTab={selectedTab}
          onPress={this.handleChangeTab}
        />
        {selectedTab == 'Daily' ? (
          this.renderDailyMovieList()
        ) :
          this.renderWeeklyMovieList()
        }
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