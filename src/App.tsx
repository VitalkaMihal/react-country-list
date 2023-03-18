import React from 'react';

import countries from './country-data.json';
import { transformCountry } from './mappers/transformCountries';

function App() {
  console.log(transformCountry(countries))
  return (
    <div className="container">
            <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
    </div>

  );
}

export default App;
