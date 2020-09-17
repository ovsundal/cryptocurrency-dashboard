import React, {useContext} from "react";
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from "../Shared/Styles";
import {AppContext} from "../App/AppProvider";
import _ from 'lodash';
import * as fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  color: #1163c9;
  place-self: center left;
`;

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    // Get all the coin symbols
    let coinSymbols = Object.keys(coinList);
    // Get all the coin names, map symbol to name
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);

    // concat both ticker and name so that search term "btc" would work for "bitcoin"
    let allStringsToSearch = coinSymbols.concat(coinNames);
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName;

        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
    })
    console.log(filteredCoins);

    setFilteredCoins(filteredCoins);

}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
    let inputValue = e.target.value;
    if(!inputValue) {
        setFilteredCoins(null);
        return;
    }

    handleFilter(inputValue, coinList, setFilteredCoins)
}

export default function() {
    const {setFilteredCoins, provider} = useContext(AppContext);
    const {coinList} = provider;
console.log(coinList);

    return (
        <SearchGrid>
            <h2>Search all coins</h2>
            <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)} />
        </SearchGrid>
    )
}
