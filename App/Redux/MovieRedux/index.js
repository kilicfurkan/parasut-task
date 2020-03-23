import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getDailyTrendingMoviesInProgress: [],
  getDailyTrendingMoviesSucceeded: ['movies'],
  getDailyTrendingMoviesFailed: ['error'],
  getWeeklyTrendingMoviesInProgress: [],
  getWeeklyTrendingMoviesSucceeded: ['movies'],
  getWeeklyTrendingMoviesFailed: ['error'],
})

/* ------------- Reducer ------------- */

const INITIAL_STATE = Immutable({
  trending: {
    daily: {
      data: [],
      loading: false,
      error: false
    },
    weekly: {
      data: [],
      loading: false,
      error: false
    },
  }
})

const getDailyTrendingMoviesInProgress = (state, { }) => state.merge({
  trending: state.trending.merge({
    daily: state.trending.daily.merge({
      data: [],
      loading: true,
      error: false
    })
  })
})

const getDailyTrendingMoviesSucceeded = (state, { movies }) => state.merge({
  trending: state.trending.merge({
    daily: state.trending.daily.merge({
      data: movies,
      loading: false,
      error: false
    })
  })
})

const getDailyTrendingMoviesFailed = (state, { error }) => state.merge({
  trending: state.trending.merge({
    daily: state.trending.daily.merge({
      loading: false,
      error
    })
  })
})

const getWeeklyTrendingMoviesInProgress = (state, { }) => state.merge({
  trending: state.trending.merge({
    weekly: state.trending.weekly.merge({
      loading: true,
      error: false
    })
  })
})

const getWeeklyTrendingMoviesSucceeded = (state, { movies }) => state.merge({
  trending: state.trending.merge({
    weekly: state.trending.weekly.merge({
      data: movies,
      loading: false,
      error: false
    })
  })
})

const getWeeklyTrendingMoviesFailed = (state, { error }) => state.merge({
  trending: state.trending.merge({
    weekly: state.trending.weekly.merge({
      loading: false,
      error
    })
  })
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DAILY_TRENDING_MOVIES_IN_PROGRESS]: getDailyTrendingMoviesInProgress,
  [Types.GET_DAILY_TRENDING_MOVIES_SUCCEEDED]: getDailyTrendingMoviesSucceeded,
  [Types.GET_DAILY_TRENDING_MOVIES_FAILED]: getDailyTrendingMoviesFailed,
  [Types.GET_WEEKLY_TRENDING_MOVIES_IN_PROGRESS]: getWeeklyTrendingMoviesInProgress,
  [Types.GET_WEEKLY_TRENDING_MOVIES_SUCCEEDED]: getWeeklyTrendingMoviesSucceeded,
  [Types.GET_WEEKLY_TRENDING_MOVIES_FAILED]: getWeeklyTrendingMoviesFailed,
})

export const MovieTypes = Types

export default Creators
