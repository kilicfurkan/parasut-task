import { call, put } from 'redux-saga/effects'
import MovieActions from '../../Redux/MovieRedux'
import { fetchDailyTrendingMovies, fetchWeeklyTrendingMovies } from '../../Services/Api'
import { checkResponseForError } from '../../Shared/utils'


export function* getDailyTrendingMovies() {
  try {
    const response = checkResponseForError(yield call(fetchDailyTrendingMovies))
    yield put(MovieActions.getDailyTrendingMoviesSucceeded(response.data.results))
  } catch {
    yield put(MovieActions.getDailyTrendingMoviesFailed(response.data.status_message))
  }
}

export function* getWeeklyTrendingMovies() {
  try {
    const response = checkResponseForError(yield call(fetchWeeklyTrendingMovies))
    yield put(MovieActions.getWeeklyTrendingMoviesSucceeded(response.data.results))
  } catch {
    yield put(MovieActions.getWeeklyTrendingMoviesFailed(response.data.status_message))
  }
}