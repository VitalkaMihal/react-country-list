interface CountryData {
        flags: CountryFlags;
        name: CountryName;
        capital: string[];
        region: string;
        area: number;
        population: number;
};

interface CountryFlags {
    png: string;
    svg: string;
};

interface CountryName {
    common: string;
    official: string;
    nativeName: CountryNativeName;
};
interface CountryNative {
    official: string; 
    common: string;
}
interface CountryNativeName {
    [key: string]: CountryNative | undefined;
}

interface TransformCountries {
    name: string;
    capital: string;
    population: number;
    flag: string;
    area:number;
    region: string;
};



export type { CountryData, TransformCountries, CountryFlags, CountryName }