import Aside from '../components/aside';
import { Main } from '../styles/pages/world';
import { Chart } from "react-google-charts";

import useWorld from '../hooks/world';
import useAllDatas from '../hooks/allDatas';

export default function Continent(){

    const { dataDeaths, dataCases } = useWorld();
    const { allDatas } = useAllDatas();

    const optionsDeaths = {
        title: "Deaths Covid-19",
        curveType: "function",
        backgroundColor: 'none',
        legend: { position: "bottom" },
    };

    const optionsCases = {
        title: "Cases Covid-19",
        curveType: "function",
        backgroundColor: 'none',
        legend: { position: "bottom" },
    };

    return (
        <Main>
            <Aside />
            <section>
                <div className="center">
                    <div className="container--world">
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
                                        <p>{ allDatas.todayDeaths }</p>
                                    </div>
                                </div>

                                <div className="cards" id='cases'>
                                    <div className="header--card">
                                        <span>Today Cases</span>
                                    </div>

                                    <div className="content-card">
                                        <p>{ allDatas.todayCases }</p>
                                    </div>
                                </div>

                                <div className="cards" id='recovered'>
                                    <div className="header--card">
                                        <span>Today Recovered</span>
                                    </div>

                                    <div className="content-card">
                                        <p>{ allDatas.todayRecovered }</p>
                                    </div>
                                </div>
                            </article>

                            <article className="graphics">
                                <div className="graphic">
                                    <Chart
                                        chartType="LineChart"
                                        width="480px"
                                        height="250px"
                                        data={dataDeaths}
                                        options={optionsDeaths}
                                    />
                                </div>

                                <div className="graphic">
                                    <Chart
                                        chartType="LineChart"
                                        width="480px"
                                        height="250px"
                                        data={dataCases}
                                        options={optionsCases}
                                    />
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    )
}