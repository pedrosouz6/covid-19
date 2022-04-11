import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextContinent = createContext();

export default function ProviderContinent({ children }) {

    const [ datasContinent, setDatasContinent ] = useState([]);
    const [ continentCountries, setContinentCountries ] = useState([]);

    let countries = [
        ['Country'],
    ]

    function countryArray(countryAll) {
        countryAll.map(item => countries.push(... [[item]]));
    }

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/continents/North America')
        .then(response => {
            const datas = response.data;

            if(datas) {
                setDatasContinent(datas);
                setContinentCountries(datas.countries);
                countryArray(datas.countries)
            }
        })
    }, []);

    return (
        <ContextContinent.Provider value={{
            datasContinent,
            continentCountries
        }}>

            { children }

        </ContextContinent.Provider>
    )
}