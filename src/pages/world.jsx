import Aside from '../components/aside';
import { Main } from '../styles/pages/world';
import { Chart } from "react-google-charts";

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function World(){

    const options = {
        title: "Company Performance",
        curveType: "function",
        backgroundColor: 'none',
        legend: { position: "bottom" },
    };

    let data = [
        ['Day', 'Sales'],
    ]

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/historical/all')
        .then(response => {
            const validate = response.data;
            
            if(validate) {
                const deaths = validate.deaths;
                const deathsObj = Object.entries(deaths);
                const deathsArray = deathsObj.slice(',');

                deathsArray.map(item => {
                    data.push([... item]);
                })
            }
        })
    }, []);
    
    return (
        <Main>
            <Aside />
            <section>
                <div className="center">
                    <div className="container--world">
                        <div className="name--page">
                            <h4>World</h4>
                        </div>

                        <div className="name--local">
                            <h3>São Paulo</h3>
                            <p>Last updated in 08/04/2022</p>
                        </div>

                        <Chart
                            chartType="LineChart"
                            width="500px"
                            height="300px"
                            data={data}
                            options={options}
                        />
                    </div>
                </div>
            </section>
        </Main>
    )
}