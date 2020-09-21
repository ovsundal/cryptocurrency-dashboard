import React, {useEffect, useState} from 'react';
import _ from 'lodash';

export const AppContext = React.createContext();

const cc = require('cryptocompare');

const MAX_FAVORITES = 10;

export const AppProvider = (props) => {
    const [provider, setProvider] = useState({
        currentFavorite: "",
        page: 'settings',
        firstVisit: true,
        favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
        filteredCoins: null,
        historicalData: []
    });

    useEffect(() => {
        const getCoinList = async () => {
            let coinList = (await cc.coinList()).Data;
            let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));

            if(cryptoDashData) {

                const {favorites, currentFavorite} = cryptoDashData;

                setProvider({
                    ...provider,
                    page: 'dashboard',
                    firstVisit: false,
                    favorites,
                    currentFavorite,
                    coinList,
                })
            }
            else {
                setProvider({
                    ...provider,
                    coinList,
                })
            }
        }



        getCoinList();
    }, []);

    const addCoin = key => {
        let favorites = [...provider.favorites];

        if(favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            setProvider({...provider, favorites: favorites})
        }
    }

    const removeCoin = key => {
        let favorites = [...provider.favorites]
        setProvider({...provider, favorites: _.pull(favorites, key)})
    }

    const isInFavorites = key => _.includes(provider.favorites, key);

    const confirmFavorites = () => {

        let currentFavorite = provider.favorites[0];

        setProvider({
            ...provider,
            firstVisit: false,
            page: 'dashboard',
            prices: null,
            historicalData: null,
            currentFavorite
        })
        localStorage.setItem('cryptoDash', JSON.stringify(
            {
                favorites: provider.favorites,
                currentFavorite
            }))
    }

    const setFilteredCoins = filteredCoins => {
        return setProvider({...provider, filteredCoins: filteredCoins})
    }

    function setCurrentFavorite() {
        setProvider({...provider, currentFavorite: this, historicalData: null})

        localStorage.setItem('cryptoDash', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cryptoDash')),
            currentFavorite: this
        }))
    }

    const setHistoricalData = data => {
        setProvider({...provider, historicalData: data})
    }

    return (
        <AppContext.Provider value={{
            provider,
            setProvider,
            confirmFavorites,
            addCoin,
            removeCoin,
            isInFavorites,
            setFilteredCoins,
            setCurrentFavorite,
            setHistoricalData
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
