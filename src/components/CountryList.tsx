import React from "react";
import { CountryItem } from "./CountryItem";
import type { TransformCountries } from "../types/types";

export const CountryList = ({ countriesTransform }: {countriesTransform: TransformCountries[]}) => {
  return (
    <div className="container text-center row">
      {countriesTransform.map((country) => {
        return <CountryItem {...country} />;
      })}
    </div>
  );
};
