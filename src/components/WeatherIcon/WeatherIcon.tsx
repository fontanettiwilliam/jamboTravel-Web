import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
  Thermometer,
} from "phosphor-react";

interface IWeatherIcon {
  weather: string;
}

export function WeatherIcon({ weather }: IWeatherIcon) {
  switch (weather) {
    case "Thunderstorm":
      return <CloudLightning size={32} color="#C88500" weight="bold" />;

    case "Drizzle":
    case "Rain":
      return <CloudRain size={32} color="#0D34FF" weight="bold" />;

    case "Snow":
      return <CloudSnow size={32} color="#38C0DE" weight="bold" />;

    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return <CloudFog size={32} color="#5B1717" weight="bold" />;

    case "Clear":
      return <Sun size={32} color="#FDBA33" weight="bold" />;

    case "Clouds":
      return <Cloud size={32} color="#B8B8B8" weight="bold" />;

    default:
      return <Thermometer size={32} color="#FFFFFF" weight="bold" />;
  }
}
