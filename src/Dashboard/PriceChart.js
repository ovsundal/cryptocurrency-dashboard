import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";
import {Tile} from "../Shared/Tile";
import highchartsConfig from "./HighchartsConfig";
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighchartsTheme from "./HighchartsTheme";

Highcharts.setOptions(HighchartsTheme);

export default function() {
    const {provider} = useContext(AppContext);
    const {historicalData} = provider;

    return (
        <Tile>
            {historicalData ?
                <HighchartsReact
                    options={highchartsConfig(historicalData)}
                    highcharts={Highcharts}
                /> : <div>Loading Historical Data</div>


            }
        </Tile>
    )
}
