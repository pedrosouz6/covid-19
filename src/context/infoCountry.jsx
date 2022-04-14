import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextCountry = createContext();

export default function ProviderCountry({ children }) {

    const [ datasInfoCountry, setDatasInfoCountry ] = useState([]);

    useEffect(() => {
        axios.get(`https://disease.sh/v3/covid-19/countries/us`)
        .then(response => {
            const datas = response.data;

            if(datas) {
                setDatasInfoCountry(datas);
            }
        })
    }, []);

    console.log(datasInfoCountry)

    return (
        <ContextCountry.Provider value={{
            datasInfoCountry
        }}>

            { children }

        </ContextCountry.Provider>
    )
}