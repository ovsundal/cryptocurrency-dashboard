import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";
import {Tile} from "../Shared/Tile";
import highchartsConfig from "./HighchartsConfig";
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

export default function() {

    return (
        <Tile>
            <HighchartsReact
                options={highchartsConfig()}
                highcharts={Highcharts}
            />
        </Tile>
    )
}
