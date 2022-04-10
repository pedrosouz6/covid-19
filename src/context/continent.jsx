import { createContext, useEffect } from 'react';
import axios from 'axios';

export const ContextContinent = createContext();

export default function ProviderContinent({ children }) {

    let dataDeathsContinent = [
        ['Day', 'Deaths'],
    ]

    let dataCasesContinent = [
        ['Day', 'Cases'],
    ]

    function deathsCovid(datasDeaths) {
        const deaths = datasDeaths.deaths;
        const deathsObj = Object.entries(deaths);
        const deathsArray = deathsObj.slice(',');

        deathsArray.map(item => {
            dataDeathsContinent.push([... item]);
        })
    }

    function casesCovid(datasCases) {
        const cases = datasCases.cases;
        const casesObj = Object.entries(cases);
        const casesArray = casesObj.slice(',');

        casesArray.map(item => {
            dataCasesContinent.push([... item]);
        })
    }

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/continents/North America')
        .then(response => {
            const datas = response.data;

            console.log(datas)
            
            if(datas) {
                deathsCovid(datas);
                casesCovid(datas);
            }
        })
    }, []);

    console.log(dataDeathsContinent)

    return (
        <ContextContinent.Provider value={{
            dataDeathsContinent,
            dataCasesContinent
        }}>

            { children }

        </ContextContinent.Provider>
    )
}