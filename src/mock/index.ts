export const mockCities = [
  {
    city: "Dubai",
    description: "Most populous city in the United Arab Emirates",
    extract:
      "Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the 7 emirates of the United Arab Emirates. Established in the 18th century as a small fishing village, the city grew rapidly in the early 21st century with a focus on tourism and luxury, having the second most five-star hotels in the world, and the tallest building in the world, the Burj Khalifa, which is 828 metres (2,717 ft) tall.",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Burj_Khalifa_2021.jpg",
    lat: 25.26305556,
    long: 55.29722222,
  },
  {
    city: "London",
    description: "Capital city of England and the United Kingdom",
    extract:
      'London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries. The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament. Since the 19th century, the name "London" has also referred to the metropolis around this core, historically split between the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire, which largely comprises Greater London, governed by the Greater London Authority.',
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg",
    lat: 51.50722222,
    long: -0.1275,
  },
];

export const mockWeather = {
  current: {
    temp: 30,
    min: 20,
    max: 35,
    feelsLike: 30,
    weather: "Clear",
  },
  nextDays: [
    {
      weekDay: "Sun",
      date: "2022-01-15",
      temp: 30,
      min: 20,
      max: 35,
      feelsLike: 30,
      weather: "Clear",
    },
    {
      weekDay: "Mon",
      date: "2022-01-16",
      temp: 30,
      min: 20,
      max: 35,
      feelsLike: 30,
      weather: "Rain",
    },
    {
      weekDay: "Tue",
      date: "2022-01-17",
      temp: 30,
      min: 20,
      max: 35,
      feelsLike: 30,
      weather: "Rain",
    },
    {
      weekDay: "Wed",
      date: "2022-01-18",
      temp: 30,
      min: 20,
      max: 35,
      feelsLike: 30,
      weather: "Snow",
    },
    {
      weekDay: "Thu",
      date: "2022-01-19",
      temp: 30,
      min: 20,
      max: 35,
      feelsLike: 30,
      weather: "Clear",
    },
  ],
};
