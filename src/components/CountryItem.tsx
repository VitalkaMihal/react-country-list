import React from 'react'
import {TransformCountries} from '../types/types'

interface CountryInfoProps {
  countryInfo: TransformCountries;
}


export const CountryItem = ({ countryInfo }:  CountryInfoProps ) => {
  return (
    <ul className="list-group">
         <li className="list-group-item d-flex align-items-center ">
            <img src={countryInfo.flag} height={70}   width={100} alt="flag" />
            <p className="p-2 flex-fl">{countryInfo.name}</p>
            <p className="p-2 flex-fill">{countryInfo.capital}</p>
            <p className="p-2 flex-fill">{countryInfo.region}</p>
        </li>
        
    </ul>
  )
}
