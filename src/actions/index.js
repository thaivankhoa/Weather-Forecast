import axios from 'axios'

const API_KEY = '53f95b26191add0c2b3e484091aa23f3';

const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER
		payload: request
	};
}