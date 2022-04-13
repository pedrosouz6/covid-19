import Aside from '../components/aside';
import { Main } from '../styles/pages/continent';

import { useState } from 'react';

import useContinent from '../hooks/continent';

import { Chart } from "react-google-charts";
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export default function Countries(){

    const [ showCountries, setShowCountries ] = useState(false);

    const { datasContinent, continentCountries, countries, setChooseContinent, chooseContinent } = useContinent();

    continentCountries.map(item => countries.push(... [[item]]));

    const options = {
        backgroundColor: 'none',
    }

    function ContinentChoose(e) {
        setChooseContinent(e.target.value);
    }

    function ChooseShowCountries() {
        setShowCountries(!showCountries);
    }

    return (
        <Main>
            <Aside />
            <section>
                <div className="center">
                    <div className="container--world">
                        <div className="left">

                            <div className="name--page">
                                <h4>Continent</h4>
                                <p>Last updated in 08/04/2022</p>
                            </div>

                            <div className="numbers--covid">
                            
                                <article className='cards--covid'>
                                    <div className="cards" id='deaths'>
                                        <div className="header--card">
                                            <span>Today Deaths</span>
                                        </div>

                                        <div className="content-card">
                                            <p>{ datasContinent.todayDeaths }</p>
                                        </div>
                                    </div>

                                    <div className="cards" id='cases'>
                                        <div className="header--card">
                                            <span>Today Cases</span>
                                        </div>

                                        <div className="content-card">
                                            <p>{ datasContinent.todayCases }</p>
                                        </div>
                                    </div>

                                    <div className="cards" id='recovered'>
                                        <div className="header--card">
                                            <span>Today Recovered</span>
                                        </div>

                                        <div className="content-card">
                                            <p>{ datasContinent.todayRecovered }</p>
                                        </div>
                                    </div>
                                </article>
                                <div className="grafic--map">
                                    <Chart
                                        chartEvents={[
                                            {
                                            eventName: "select",
                                            callback: ({ chartWrapper }) => {
                                                const chart = chartWrapper.getChart();
                                                const selection = chart.getSelection();
                                                if (selection.length === 0) return;
                                                const region = countries[selection[0].row + 1];
                                            },
                                            },
                                        ]}
                                        chartType="GeoChart"
                                        width='500px'
                                        height="400px"
                                        data={countries}
                                        options={options}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <div className="search--country">

                                <h4>Search continent: </h4>

                                <select onChange={(e) => ContinentChoose(e)}>
                                    <option value="Asia">Asia</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Australia-Oceania">Australia-Oceania</option>  
                                    <option value="Europe">Europe</option>
                                    <option value="South America">South America</option>
                                    <option value="North America">North America</option>
                                </select>

                            </div>

                            <p className='names--countries' onClick={() => ChooseShowCountries()}>
                                Countries of {chooseContinent} 
                                { showCountries ?  <IoIosArrowUp /> : <IoIosArrowDown /> }
                            </p> 

                            { showCountries && (
                                <article className='continent-country'>
                                { continentCountries.map((item, key) => (
                                    <p key={key}>{ item }</p>
                                ))}
                                </article>
                            ) }
                            
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    )
}