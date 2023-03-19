import React from 'react'
import countriesJSON from '../country-data.json';
import { CountryItem } from './CountryItem'
import { transformCountry } from '../mappers/transformCountries'
import { TransformCountries } from '../types/types'

interface ItemProps {
    name: string;
    capital: string;
    population: number;
    flag: string;
    area:number;
    region: string;
}

export const CountryList = ({ countryInfo }: { countryInfo: ItemProps[] }) => {
    const countries = transformCountry(countriesJSON);
    return (
        <div className="container">
            {countries.map((country) => {
                return (
                    <CountryItem countryInfo={country}/>
                )
            } )}
        </div>
    )
}
