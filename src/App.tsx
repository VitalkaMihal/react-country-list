import React from "react";

import countriesJSON from "./country-data.json";
import { transformCountry } from "./mappers/transformCountries";
import { CountryList } from "./components/CountryList";

function App() {
  const countries = transformCountry(countriesJSON);

  return (
    <div className="container">
      <h1>Country List</h1>
      <CountryList countriesTransform={countries} />
    </div>
  );
}

export default App;
