import { api } from "@/lib/axios";
import { IGetWeatherByDate, IWeather } from "@/types";

export async function apiGetWeatherByDate({
  lat,
  long,
  date,
}: IGetWeatherByDate) {
  try {
    const requestObj = {
      lat: lat,
      long: long,
      date: date,
    };

    /**
     * ! Unfortunately this is a paid function, but the idea was to use this API: https://openweathermap.org/api/forecast30
     * ! And I didn't have time to research if another api could meet this need.
     * ! My idea was to return an object of type IWeather and update the weather display
     * const response = await api.post("getWeatherByDate", requestObj);
     * return response.data as IWeather;
     */
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
