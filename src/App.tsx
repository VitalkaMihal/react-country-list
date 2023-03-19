import React from 'react';

import countriesJSON from './country-data.json';
import { transformCountry } from './mappers/transformCountries';
import { CountryData, TransformCountries } from './types/types';
import { CountryItem } from './components/CountryItem';
import { CountryList } from './components/CountryList';

function App() {
  const countries = transformCountry(countriesJSON);

  return (
    <div className="container">
      <h1>Country List</h1>
      <CountryList countryInfo={countries}/>
    </div>
  );
}

export default App;
