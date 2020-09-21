import {Tile} from "../Shared/Tile";
import React, {useContext} from "react";
import styled from "styled-components";
import {AppContext} from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";

const SpotlightName = styled.h2`
  text-align: center;
  
`;

export default function() {

    const {provider} = useContext(AppContext);
    const {currentFavorite, coinList} = provider;


    return (
        <Tile>
            <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
            <CoinImage spotlight coin={coinList[currentFavorite]} />
        </Tile>
    )
}
