import { add, format } from "date-fns";
import enCA from "date-fns/locale/en-CA";

export const today = format(new Date(), "Y'-'LL'-'d", {
  locale: enCA,
});

export const maxDaysFormatted = () => {
  const maxDays = add(new Date(), {
    days: 30,
  });

  return format(maxDays, "Y'-'LL'-'d", {
    locale: enCA,
  });
};

export const formattedDateToCA = (date: string) => {
  return format(new Date(date), "'Forecast for 'LLLL d',' Y", {
    locale: enCA,
  });
};
