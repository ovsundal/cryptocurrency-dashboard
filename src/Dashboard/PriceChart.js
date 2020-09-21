import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";
import {Tile} from "../Shared/Tile";
import highchartsConfig from "./HighchartsConfig";
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighchartsTheme from "./HighchartsTheme";

Highcharts.setOptions(HighchartsTheme);

export default function() {
    // const {provider, addCoin, removeCoin, isInFavorites} = useContext(AppContext);

    return (
        <Tile>
            <HighchartsReact
                options={highchartsConfig()}
                highcharts={Highcharts}
            />
        </Tile>
    )
}
