import Aside from '../components/aside';
import { Main } from '../styles/pages/countries';

import { useState } from 'react';

import useCountries from '../hooks/countries';
import useInfoCountry from '../hooks/infoCountries';

import { Chart } from "react-google-charts";
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export default function Countries(){

    const [ showCountries, setShowCountries ] = useState(false);

    const [ filterDatas, setFilterDatas ] = useState('total');

    const { datasCountries } = useCountries();
    const { datasInfoCountry } = useInfoCountry();

    const data = [
        ['Country'],
        ['US'],
    ]

    console.log(datasCountries)

    const options = {
        backgroundColor: 'none',
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
                                <h4>Country</h4>
                            </div>

                            <div className="numbers--covid">
                            
                            <div className="container--cards">
                                <div className="filter--datas">
                                    <p>Filter: </p>
                                    <select onChange={(e) => setFilterDatas(e.target.value)}>
                                        <option value="total">Total</option>
                                        <option value="today">Today</option>
                                    </select>
                                </div>
                                <article className='cards--covid'>
                                    
                                    <div className="cards" id='deaths'>
                                        <div className="header--card">
                                            <span>Total Deaths</span>
                                        </div>

                                        <div className="content-card">
                                            <p>{ filterDatas === 'total' ? datasInfoCountry.deaths : datasInfoCountry.todayDeaths }</p>
                                        </div>
                                    </div>

                                    <div className="cards" id='cases'>
                                        <div className="header--card">
                                            <span>Total Cases</span>
                                        </div>

                                        <div className="content-card">
                                            <p>{ filterDatas === 'total' ? datasInfoCountry.cases : datasInfoCountry.todayCases }</p>
                                        </div>
                                    </div>

                                    <div className="cards" id='recovered'>
                                        <div className="header--card">
                                            <span>Total Recovered</span>
                                        </div>

                                        <div className="content-card">
                                            <p>{ filterDatas === 'total' ? datasInfoCountry.recovered : datasInfoCountry.todayRecovered }</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                                <div className="grafic--map">
                                    <Chart
                                        chartEvents={[
                                            {
                                            eventName: "select",
                                            callback: ({ chartWrapper }) => {
                                                const chart = chartWrapper.getChart();
                                                const selection = chart.getSelection();
                                                if (selection.length === 0) return;
                                                const region = data[selection[0].row + 1];
                                            },
                                            },
                                        ]}
                                        chartType="GeoChart"
                                        width='500px'
                                        height="400px"
                                        data={data}
                                        options={options}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <div className="search--country">
                                <h4>United States</h4>
                            </div>

                            <p className='names--countries' onClick={() => ChooseShowCountries()}>
                                States
                                { showCountries ?  <IoIosArrowUp /> : <IoIosArrowDown /> }
                            </p> 

                            { showCountries && (
                                <article className='continent-country'>
                                { datasCountries.map((item, key) => (
                                    <p key={key}>{ item.state }</p>
                                ))}
                                </article>
                            )}
                            
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    )
}