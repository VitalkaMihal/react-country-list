import React from "react";
import { Badge } from "./Badge";
import { Country } from "../types/types";

interface CountryItemProps {
  country: Country;
}

export const CountryItem = ({ country }: CountryItemProps) => {
  const { flag, name, capital, region, area, population } = country;

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex align-items-center">
        <img src={flag} height={70} width={100} alt="flag" />
        <p style={{ width: 250 }} className="justify-content-start m-3">
          {name}
        </p>
        <p style={{ width: 200 }} className="justify-content-start">
          {capital}
        </p>
        <p style={{ width: 200 }} className="justify-content-start">
          {region}
        </p>
        <Badge
          color="flex-grow-1 justify-content-center badge bg-primary px-4 py-2 m-2"
          count={area}
          title="area"
        />
        <Badge
          color="flex-grow-1 justify-content-center badge bg-secondary px-3 py-2 m-2"
          count={population}
          title="population"
        />
      </li>
    </ul>
  );
};
