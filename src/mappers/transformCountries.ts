import { CountryData, TransformCountries } from "../types/types"


export const transformCountry = (countries: CountryData[]): TransformCountries[] => {
    return countries.map((country: CountryData) => {
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
