import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherResponse } from "../interfaces/interfaces";

const BASE_URL = import.meta.env.VITE_API_URL_WEATHER;
const TOKEN = import.meta.env.VITE_API_TOKEN;
console.log("Токен API:", TOKEN);

export const apiWeather = createApi({
  reducerPath: "apiWeather",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    searchCity: builder.query<WeatherResponse, string>({
      query: (city) => ({
        url: `/weather`,
        params: {
          q: city,
          appid: TOKEN,
          lang: "ru",
          units: "units",
        },
      }),
    }),
  }),
});

export const { useSearchCityQuery } = apiWeather;
