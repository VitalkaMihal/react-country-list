import React from "react";
import type { TransformCountries } from "../types/types";
import { Badge } from "./Badge";

export const CountryItem = ({ name, flag, capital, region, area, population }: TransformCountries) => {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex align-items-center">
        <img src={flag} height={70} width={100} alt="flag" />
        <div  style={{width: 250}} className="d-flex justify-content-start m-3">{name}</div>
        <div  style={{width: 200}} className="d-flex justify-content-start">{capital}</div>
        <div  style={{width: 200}} className="d-flex justify-content-start">{region}</div>
        <Badge color="d-flex flex-grow-1 justify-content-center badge bg-primary px-4 py-2 m-2" count={area} title={"area"} />
        <Badge color="d-flex flex-grow-1 justify-content-center badge bg-secondary px-3 py-2 m-2" count={population} title={"population"} />
      </li>
    </ul>
  );
};
