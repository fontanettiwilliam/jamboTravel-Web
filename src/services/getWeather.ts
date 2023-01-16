import { api } from "@/lib/axios";
import { IGetWeather, IWeather } from "@/types";

export async function apiGetWeather({ lat, long }: IGetWeather) {
  try {
    const requestObj = {
      lat: lat,
      long: long,
    };

    const response = await api.post("getWeather", requestObj);

    return response.data as IWeather;
  } catch (error) {
    console.log(error);
    return null;
  }
}
