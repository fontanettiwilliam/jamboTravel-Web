import { api } from "@/lib/axios";
import { ICity } from "@/types";

export async function apiGetCities() {
  try {
    const response = await api.get("getCities");

    // console.log("response", JSON.stringify(response.data, null, 2));

    return response.data.cities as ICity[];
  } catch (error) {
    console.log(error);
    return [] as ICity[];
  }
}
