import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";
import {DeletableTile, DisabledTile, SelectableTile} from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
    return topSection ? () => {
        removeCoin(coinKey)
    } : () => {
        addCoin(coinKey)
    }
}

export default function ({coinKey, topSection}) {
    const {provider, addCoin, removeCoin, isInFavorites} = useContext(AppContext);
    const {coinList} = provider;

    let TileClass = SelectableTile;

    if(topSection) {
        TileClass = DeletableTile;
    }
    else if(isInFavorites(coinKey)){
        TileClass = DisabledTile;
    }

    let coin = coinList[coinKey];

    return (
        <TileClass onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
            <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
        </TileClass>
    )
}
