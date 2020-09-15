import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";
import {SelectableTile} from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function ({coinKey}) {
    const {provider} = useContext(AppContext);
    const {coinList} = provider;

    const TileClass = SelectableTile;
    let coin = coinList[coinKey];

    return (
        <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
        </TileClass>
    )
}
