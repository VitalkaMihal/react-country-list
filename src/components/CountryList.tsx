import React from "react";
import { CountryItem } from "./CountryItem";
import type { Country } from "../types/types";

interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <div className="container text-center row">
      {countries.map((country) => {
        return <CountryItem key={country.name} country={country} />;
      })}
    </div>
  );
};
