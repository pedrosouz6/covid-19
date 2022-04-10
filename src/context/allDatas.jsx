import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContextAllDatas = createContext();

export default function ProviderAllDatas({ children }) {

    const [ allDatas, setAllDatas ] = useState([])

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/all')
        .then(response => {
            const datas = response.data;
            
            if(datas) {
                setAllDatas(datas);
            }
        })
    }, []);

    return (
        <ContextAllDatas.Provider value={{
            allDatas
        }}>

            { children }

        </ContextAllDatas.Provider>
    )
}