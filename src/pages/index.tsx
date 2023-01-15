import { Button, ExploreContainer, Main } from "@/styles/pages";
import Head from "next/head";

import Image from "next/image";
import banner from "@/assets/banner.svg";
import { useEffect, useState } from "react";
import { ICity, IWeather } from "@/types";
import { mockCities } from "@/mock";

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
  const [isLoading, setIsLoading] = useState(false);
  //#endregion

  //#region [ON_PAGE_LOAD]
  const getCities = async () => {
    setIsLoading((prev) => !prev);
    // TODO - fetch api
    // const response = await fetch('http://localhost:3333/getCities');
    // const data = await response.json()

    setCities(mockCities);

    setTimeout(() => {
      setIsLoading((prev) => !prev);
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
      </Main>
    </>
  );
}
