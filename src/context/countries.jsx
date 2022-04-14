import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextCountries = createContext();

export default function ProviderCountries({ children }) {

    const [ datasCountries, setDatasCountries ] = useState([]);

    useEffect(() => {
        axios.get(`https://disease.sh/v3/covid-19/states`)
        .then(response => {
            const datas = response.data;

            if(datas) {
                setDatasCountries(datas);
            }
        })
    }, []);

    return (
        <ContextCountries.Provider value={{
            datasCountries
        }}>

            { children }

        </ContextCountries.Provider>
    )
}