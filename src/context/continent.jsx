import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextContinent = createContext();

export default function ProviderContinent({ children }) {

    const [ datasContinent, setDatasContinent ] = useState([]);
    const [ continentCountries, setContinentCountries ] = useState([]);

    let countries = [
        ['Country'],
    ]

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/continents/South America')
        .then(response => {
            const datas = response.data;

            if(datas) {
                setDatasContinent(datas);
                setContinentCountries(datas.countries);
            }
        })
    }, []);

    console.log(countries)

    return (
        <ContextContinent.Provider value={{
            datasContinent,
            continentCountries,
            countries
        }}>

            { children }

        </ContextContinent.Provider>
    )
}