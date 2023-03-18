export interface countryData {
        flags: {
            png: string;
            svg: string;
        }
        name: {
            common: string;
            official: string;
            nativeName: {};
        };
        capital: Array<string>;
        region: string;
        area: number;
        population: number;
}

export interface transformCountries {
    name: string;
    capital: string;
    population: number;
    flag: string;
    area:number;
    region: string;
}