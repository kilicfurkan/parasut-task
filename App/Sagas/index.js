import { takeLatest, all } from 'redux-saga/effects'

import { StartupTypes } from 'App/Redux/Startup/Actions'

/* ------------- Types ------------- */

import { MovieTypes } from '../Redux/MovieRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSaga'
import {
  getDailyTrendingMovies,
  getWeeklyTrendingMovies,
} from './MovieSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(MovieTypes.GET_DAILY_TRENDING_MOVIES_IN_PROGRESS, getDailyTrendingMovies),
    takeLatest(MovieTypes.GET_WEEKLY_TRENDING_MOVIES_IN_PROGRESS, getWeeklyTrendingMovies)
  ])
}
