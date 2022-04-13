import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextContinent = createContext();

export default function ProviderContinent({ children }) {

    const [ datasContinent, setDatasContinent ] = useState([]);
    const [ continentCountries, setContinentCountries ] = useState([]);
    const [ chooseContinent, setChooseContinent ] = useState('Asia');

    let countries = [
        ['Country'],
    ]

    useEffect(() => {
        axios.get(`https://disease.sh/v3/covid-19/continents/${chooseContinent}`)
        .then(response => {
            const datas = response.data;

            if(datas) {
                setDatasContinent(datas);
                setContinentCountries(datas.countries);
            }
        })
    }, [chooseContinent]);

    return (
        <ContextContinent.Provider value={{
            datasContinent,
            continentCountries,
            countries,
            setChooseContinent,
            chooseContinent
        }}>

            { children }

        </ContextContinent.Provider>
    )
}