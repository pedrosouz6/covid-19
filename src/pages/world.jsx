import Aside from '../components/aside';
import { Main } from '../styles/pages/world';
import { Chart } from "react-google-charts";

import useWorld from '../hooks/world';
import useAllDatas from '../hooks/allDatas';

export default function World(){

    const { dataDeaths, dataCases } = useWorld();
    const { allDatas } = useAllDatas();

    console.log(allDatas)

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

    console.log(dataCases)

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

                        <article>
                            <div className="graphics">
                                <div className="graphic">
                                    <Chart
                                        chartType="LineChart"
                                        width="100%"
                                        height="250px"
                                        data={dataDeaths}
                                        options={optionsDeaths}
                                    />
                                </div>

                                <div className="graphic">
                                    <Chart
                                        chartType="LineChart"
                                        width="100%"
                                        height="250px"
                                        data={dataCases}
                                        options={optionsCases}
                                    />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </Main>
    )
}