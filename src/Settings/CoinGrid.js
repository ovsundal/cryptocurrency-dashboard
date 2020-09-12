import React, {useContext} from "react";
import styled, {css} from "styled-components";
import {AppContext} from "../App/AppProvider";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
export default function () {
    const {provider, setProvider} = useContext(AppContext);
    const {coinList} = provider;

    return (
        <CoinGridStyled>
            {Object.keys(coinList).map(coinKey => <div>{coinKey}</div>)}
        </CoinGridStyled>
    )
}
