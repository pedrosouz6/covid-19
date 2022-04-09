import Aside from '../components/aside';
import { Main } from '../styles/pages/world';
import { Chart } from "react-google-charts";

export default function World(){
     const data = [
        ["Year", "Sales", 'e'],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
      ];
      
       const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
      };

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
                            width="100%"
                            height="400px"
                            data={data}
                            options={options}
                        />
                    </div>
                </div>
            </section>
        </Main>
    )
}