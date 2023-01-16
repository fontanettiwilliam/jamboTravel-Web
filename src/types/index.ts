export interface ICity {
  city: string;
  description: string;
  extract: string;
  thumbnail: string;
  lat: number;
  long: number;
}

export interface ICitiesGet {
  cities: ICity[];
}

export interface INextDay {
  weekDay: string;
  date: string;
  temp: number;
  min: number;
  max: number;
  feelsLike: number;
  weather: string;
}

export interface IWeather {
  current: {
    temp: number;
    min: number;
    max: number;
    feelsLike: number;
    weather: string;
  };
  nextDays: INextDay[];
}

export interface IGetWeather {
  lat: number;
  long: number;
}
