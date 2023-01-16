/* eslint-disable @next/next/no-img-element */
import { add, format } from "date-fns";
import enCA from "date-fns/locale/en-CA";

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
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { mockCities, mockWeather } from "@/mock";
import { Sun } from "phosphor-react";
import { ICity, IWeather } from "@/types";
import { Loader } from "@/components/Loader/Loader";
import { apiGetCities } from "@/services/getCities";
import { apiGetWeather } from "@/services/getWeather";

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

  function handleSubmitNewDate(event: FormEvent) {
    event.preventDefault();

    if (newDate !== "") {
      setTripDate(newDate);
      setNewDate("");
    }
    setIsLoading((prev) => !prev);

    // TODO - fetch API
    // const response = await fetch('http://localhost:3333/getWeatherByDate');
    // const data = await response.json()

    setModalWeather(false);
    setTimeout(() => {
      setIsLoading((prev) => !prev);
    }, 500);
  }

  const handleClearTripDate = () => {
    setTripDate("");
  };
  //#endregion

  //#region [INPUT_VALIDATION]
  const today = format(new Date(), "Y'-'LL'-'d", {
    locale: enCA,
  });

  const maxDays = add(new Date(), {
    days: 30,
  });

  const maxDaysFormatted = format(maxDays, "Y'-'LL'-'d", {
    locale: enCA,
  });
  //#endregion

  //#region [CONST]
  const canShowNextDaysWeather = weather && weather.nextDays.length > 0;
  const isNewDateEmpty = newDate.length === 0;
  const isTripDateEmpty = tripDate.length === 0;

  const formattedTripDate = !isTripDateEmpty
    ? format(new Date(tripDate), "'Forecast for 'LLLL d',' Y", {
        locale: enCA,
      })
    : "";
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

                {weather ? (
                  <DegreesDisplay>
                    <Sun size={32} color="#FDBA33" weight="bold" />
                    <strong>{`${weather.current.temp}°`}</strong>
                    <span>{`Feels Like: ${weather.current.feelsLike}°`}</span>
                    <span>{`H: ${weather.current.max}°`}</span>
                    <span>{`L: ${weather.current.temp}°`}</span>
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
                    ? weather.nextDays.map((daily) => (
                        <DailyWeatherDisplay key={daily.weekDay}>
                          <span className="dailyWeather">{daily.weekDay}</span>
                          <span className="dailyWeather">{`H: ${daily.max}°`}</span>
                          <span className="dailyWeather">{`L: ${daily.min}°`}</span>
                        </DailyWeatherDisplay>
                      ))
                    : tripWeather.nextDays.map((daily) => (
                        <DailyWeatherDisplay key={daily.weekDay}>
                          <span className="dailyWeather">{daily.weekDay}</span>
                          <span className="dailyWeather">{`H: ${daily.max}°`}</span>
                          <span className="dailyWeather">{`L: ${daily.min}°`}</span>
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
              max={maxDaysFormatted}
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
