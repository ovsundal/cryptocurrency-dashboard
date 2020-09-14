import React, {useContext} from "react";
import styled, {css} from "styled-components";
import {AppContext} from "../App/AppProvider";
import {SelectableTile, Tile} from "../Shared/Tile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`
export default function () {
    const {provider, setProvider} = useContext(AppContext);
    const {coinList} = provider;

    return (
        <CoinGridStyled>
            {Object.keys(coinList).map(coinKey => <SelectableTile>{coinKey}</SelectableTile>)}
        </CoinGridStyled>
    )
}
