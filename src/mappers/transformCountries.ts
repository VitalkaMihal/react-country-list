import { countryData } from "../types/types"
import { transformCountries } from "../types/types"


export const transformCountry = (countries: countryData[]): transformCountries[] => {
    return countries.map((country: countryData) => {
        return {
        name: country.name.common,
        capital: country.capital[0],
        population: country.population,
        flag: country.flags.svg,
        area: country.area,
        region: country.region,
    }
    })
};
