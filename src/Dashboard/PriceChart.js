import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";
import {Tile} from "../Shared/Tile";
import highchartsConfig from "./HighchartsConfig";
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighchartsTheme from "./HighchartsTheme";
import ChartSelect from "./ChartSelect";

Highcharts.setOptions(HighchartsTheme);

export default function() {
    const {provider, setChartTimeInterval} = useContext(AppContext);
    const {historicalData} = provider;

    return (
        <Tile>
            <ChartSelect
                defaultValue={"months"}
                onChange={e => setChartTimeInterval(e.target.value)}
            >
                <option value={"days"}>Days</option>
                <option value={"weeks"}>Weeks</option>
                <option value={"months"}>Months</option>
            </ChartSelect>

            {historicalData ?
                <HighchartsReact
                    options={highchartsConfig(historicalData)}
                    highcharts={Highcharts}
                /> : <div>Loading Historical Data</div>
            }
        </Tile>
    )
}
