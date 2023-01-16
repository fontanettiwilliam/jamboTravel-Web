/* eslint-disable @next/next/no-img-element */
import banner from "@/assets/banner.svg";
import { ListItem } from "@/components/ListItem/ListItem";
import { Modal } from "@/components/Modal/Modal";
import {
  Button,
  CityContainer,
  CurrentWeather,
  DailyWeatherActions,
  DailyWeatherContainer,
  DailyWeatherDisplay,
  DegreesDisplay,
  ExploreContainer,
  FormSelectDate,
  Main,
} from "@/styles/pages";
import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

import { Loader } from "@/components/Loader/Loader";
import { WeatherIcon } from "@/components/WeatherIcon/WeatherIcon";
import { apiGetCities } from "@/services/getCities";
import { apiGetWeather } from "@/services/getWeather";
import { apiGetWeatherByDate } from "@/services/getWeatherByDate";
import { ICity, IWeather } from "@/types";
import { formattedDateToCA, maxDaysFormatted, today } from "@/utils";

export default function Home() {
  //#region [STATES]
  const [cities, setCities] = useState<ICity[]>([]);
  const [city, setCity] = useState<ICity | null>(null);
  const [weather, setWeather] = useState<IWeather | null>(null);

  const [newDate, setNewDate] = useState<string>("");
  const [tripDate, setTripDate] = useState<string>("");
  const [tripWeather, setTripWeather] = useState<IWeather | null>(null);

  const [modalDestination, setModalDestination] = useState(false);
  const [modalWeather, setModalWeather] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  //#endregion

  //#region [ON_PAGE_LOAD]
  const getCities = async () => {
    const response = await apiGetCities();

    setCities(response);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getCities();
  }, []);
  //#endregion

  //#region [DESTINATION]
  const handleModalDestination = async () => {
    setModalDestination(true);
  };

  const handleCloseModalDestination = () => {
    setModalDestination(false);
  };

  const handleChoseCity = async (value: ICity) => {
    setCity(value);

    setIsLoading((prev) => !prev);

    const { lat, long } = value;
    const response = await apiGetWeather({ lat, long });

    setWeather(response);
    setModalDestination(false);
    setNewDate("");
    setTripDate("");

    setTimeout(() => {
      setIsLoading((prev) => !prev);
    }, 500);
  };
  //#endregion

  //#region [WEATHER]
  const handleModalWeather = () => {
    setModalWeather(true);
  };

  const handleCloseModalWeather = () => {
    setModalWeather(false);
  };

  function handleChangeNewDate(event: ChangeEvent<HTMLInputElement>) {
    setNewDate(event.target.value);
  }

  async function handleSubmitNewDate(event: FormEvent) {
    setIsLoading((prev) => !prev);

    event.preventDefault();

    if (newDate !== "") {
      setTripDate(newDate);
      setNewDate("");
    }

    // TODO - Please read apiGetWeatherByDate for more information
    if (city) {
      const response = await apiGetWeatherByDate({
        lat: city.lat,
        long: city.long,
        date: newDate,
      });

      setTripWeather(response);
    }

    setModalWeather(false);

    setTimeout(() => {
      setIsLoading((prev) => !prev);
    }, 500);
  }

  const handleClearTripDate = () => {
    setTripDate("");
  };
  //#endregion

  //#region [CONST/MEMOIZED]
  const canShowNextDaysWeather = useMemo(() => {
    return !!weather && weather.nextDays.length > 0;
  }, [weather]);

  const isNewDateEmpty = useMemo(() => {
    return newDate.length === 0;
  }, [newDate]);

  const isTripDateEmpty = useMemo(() => {
    return tripDate.length === 0;
  }, [tripDate]);

  const formattedTripDate = useMemo(() => {
    if (!isTripDateEmpty) {
      return formattedDateToCA(tripDate);
    }
    return "";
  }, [isTripDateEmpty, tripDate]);

  const maxDay = maxDaysFormatted();
  //#endregion

  return (
    <>
      <Head>
        <title>jambo travel</title>
        <meta
          name="description"
          content="Find a great place for your next trip"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ExploreContainer>
          <div>
            <h1>Explore a new world.</h1>

            <p>
              No matter where in the world you want to go, we can help get you
              there
            </p>

            <Button onClick={handleModalDestination}>
              <span>Explore Now</span>
            </Button>
          </div>

          <Image
            src={banner.src}
            alt="jambo travel banner"
            width={banner.width}
            height={banner.height}
          />
        </ExploreContainer>

        {city && (
          <CityContainer>
            <div className="imageBox">
              <div className="overlay" />
              <img src={city.thumbnail} alt={city.city} />

              <CurrentWeather>
                <strong>Current Weather</strong>

                {!!weather ? (
                  <DegreesDisplay>
                    <WeatherIcon weather={weather.current.weather} />
                    <strong>{`${weather.current.temp}°`}</strong>
                    <span>{`Feels Like: ${weather.current.feelsLike.toFixed(
                      0
                    )}°`}</span>
                    <span>{`H: ${weather.current.max.toFixed(0)}°`}</span>
                    <span>{`L: ${weather.current.temp.toFixed(0)}°`}</span>
                  </DegreesDisplay>
                ) : (
                  <></>
                )}
              </CurrentWeather>
            </div>

            <div className="cityInfo">
              <h1 className="title">{city.city}</h1>
              <span className="subtitle">{city.description}</span>
              <p className="information">{city.extract}</p>

              {!isTripDateEmpty ? (
                <h1>{formattedTripDate}</h1>
              ) : (
                <h1>Next days</h1>
              )}

              {canShowNextDaysWeather && (
                <DailyWeatherContainer>
                  {!tripWeather
                    ? weather?.nextDays.map((daily) => (
                        <DailyWeatherDisplay key={daily.weekDay}>
                          <span className="dailyWeather">{daily.weekDay}</span>
                          <span className="dailyWeather">{`H: ${daily.max.toFixed(
                            0
                          )}°`}</span>
                          <span className="dailyWeather">{`L: ${daily.min.toFixed(
                            0
                          )}°`}</span>
                        </DailyWeatherDisplay>
                      ))
                    : tripWeather.nextDays.map((daily) => (
                        <DailyWeatherDisplay key={daily.weekDay}>
                          <span className="dailyWeather">{daily.weekDay}</span>
                          <span className="dailyWeather">{`H: ${daily.max.toFixed(
                            0
                          )}°`}</span>
                          <span className="dailyWeather">{`L: ${daily.min.toFixed(
                            0
                          )}°`}</span>
                        </DailyWeatherDisplay>
                      ))}

                  <DailyWeatherActions>
                    <button onClick={handleModalWeather}>select a date</button>
                    {!isTripDateEmpty && (
                      <button className="clear" onClick={handleClearTripDate}>
                        clear
                      </button>
                    )}
                  </DailyWeatherActions>
                </DailyWeatherContainer>
              )}
            </div>
          </CityContainer>
        )}

        <Modal
          title="Select your destination"
          visible={modalDestination}
          onClose={handleCloseModalDestination}
        >
          {cities.length > 0 ? (
            cities.map((c) => {
              return (
                <ListItem
                  key={c.city}
                  src={c.thumbnail}
                  title={c.city}
                  description={c.description}
                  onClick={() => handleChoseCity(c)}
                />
              );
            })
          ) : (
            <h3>No city found</h3>
          )}
        </Modal>

        <Modal
          title="Select a date"
          visible={modalWeather}
          onClose={handleCloseModalWeather}
        >
          <FormSelectDate action="#" onSubmit={handleSubmitNewDate}>
            <input
              type="date"
              name="newDateInput"
              id="newDateInput"
              value={newDate}
              onChange={handleChangeNewDate}
              min={today}
              max={maxDay}
              required
            />

            <footer>
              <button className="cancel" onClick={handleCloseModalWeather}>
                Cancel
              </button>
              <button type="submit" disabled={isNewDateEmpty}>
                Apply
              </button>
            </footer>
          </FormSelectDate>
        </Modal>

        <Loader visible={isLoading} />
      </Main>
    </>
  );
}
