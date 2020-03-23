import axios from "axios"
import { API_URL, API_TOKEN } from 'react-native-dotenv'
import * as Routes from "./ApiRouter";

export let axiosInstance = (versionNumber = "v1") => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 30000,
  });
};

let aidyBackEndServices = axiosInstance();

export const fetchDailyTrendingMovies = () => {
  return aidyBackEndServices.get(Routes.dailyTrendingMoviesPath);
}

export const fetchWeeklyTrendingMovies = () => {
  return aidyBackEndServices.get(Routes.weeklyTrendingMoviesPath);
}