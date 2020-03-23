import { call, put } from 'redux-saga/effects'
import MovieActions from '../../Redux/MovieRedux'
import { fetchDailyTrendingMovies, fetchWeeklyTrendingMovies } from '../../Services/Api'
import { checkResponseForError } from '../../Shared/utils'


export function* getDailyTrendingMovies() {
  console.log('getDailyTrendingMovies oldu')
  try {
    const response = checkResponseForError(yield call(fetchDailyTrendingMovies))
    console.log(response, 'getDailyTrendingMovies saga')
    yield put(MovieActions.getDailyTrendingMoviesSucceeded(response.data.results))
  } catch {
    yield put(MovieActions.getDailyTrendingMoviesFailed('error'))
  }
}

export function* getWeeklyTrendingMovies() {
  console.log('getWeeklyTrendingMovies oldu')
  try {
    const response = checkResponseForError(yield call(fetchWeeklyTrendingMovies))
    console.log(response, 'getWeeklyTrendingMovies saga')
    yield put(MovieActions.getWeeklyTrendingMoviesSucceeded(response.data.results))
  } catch {
    yield put(MovieActions.getWeeklyTrendingMoviesFailed('error'))
  }
}