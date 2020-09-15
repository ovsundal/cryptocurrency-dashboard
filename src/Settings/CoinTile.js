import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";
import {DeletableTile, SelectableTile} from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function ({coinKey, topSection}) {
    const {provider} = useContext(AppContext);
    const {coinList} = provider;

    let TileClass = SelectableTile;

    if(topSection) {
        TileClass = DeletableTile;
    }

    let coin = coinList[coinKey];

    return (
        <TileClass>
            <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
        </TileClass>
    )
}
