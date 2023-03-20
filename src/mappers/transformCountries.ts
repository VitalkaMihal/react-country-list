import { CountryAPI, Country } from "../types/types";

export const transformCountries = (countries: CountryAPI[]): Country[] => {
  return countries.map((country: CountryAPI) => {
    return {
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      flag: country.flags.svg,
      area: country.area,
      region: country.region,
    };
  });
};
