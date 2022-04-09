import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContextWorld = createContext();

export default function ProviderWorld({ children }) {

    let dataDeaths = [
        ['Day', 'Deaths'],
    ]

    let dataCases = [
        ['Day', 'Cases'],
    ]

    function deathsCovid(datasDeaths) {
        const deaths = datasDeaths.deaths;
        const deathsObj = Object.entries(deaths);
        const deathsArray = deathsObj.slice(',');

        deathsArray.map(item => {
            dataDeaths.push([... item]);
        })
    }

    function casesCovid(datasCases) {
        const cases = datasCases.cases;
        const casesObj = Object.entries(cases);
        const casesArray = casesObj.slice(',');

        casesArray.map(item => {
            dataCases.push([... item]);
        })
    }

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/historical/all')
        .then(response => {
            const datas = response.data;
            
            if(datas) {
                deathsCovid(datas);
                casesCovid(datas);
            }
        })
    }, []);

    return (
        <ContextWorld.Provider value={{
            dataDeaths,
            dataCases
        }}>

            { children }

        </ContextWorld.Provider>
    )
}