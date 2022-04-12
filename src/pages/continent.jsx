import Aside from '../components/aside';
import { Main } from '../styles/pages/continent';

import useContinent from '../hooks/continent';
import { Chart } from "react-google-charts";
export default function Continent(){

    const { datasContinent, continentCountries, countries } = useContinent();

    continentCountries.map(item => countries.push(... [[item]]));

    const options = {
        backgroundColor: 'none'
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
                            <article className='continent-country'>
                                { continentCountries.map((item, key) => (
                                    <p key={key}>{ item }</p>
                                ))}
                                
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    )
}