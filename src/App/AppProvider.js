import React, {useEffect, useState} from 'react';
import _ from 'lodash';

export const AppContext = React.createContext();

const cc = require('cryptocompare');

const MAX_FAVORITES = 10;

export const AppProvider = (props) => {
    const [provider, setProvider] = useState({page: 'settings', firstVisit: true, favorites: ['BTC', 'ETH', 'XMR', 'DOGE'], filteredCoins: null});

    useEffect(() => {
        const getCoinList = async () => {
            let coinList = (await cc.coinList()).Data;
            let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));

            if(cryptoDashData) {
                setProvider({
                    ...provider,
                    page: 'dashboard',
                    firstVisit: false,
                    favorites: cryptoDashData.favorites,
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
        setProvider({
            ...provider,
            firstVisit: false,
            page: 'dashboard',
        })
        localStorage.setItem('cryptoDash', JSON.stringify(
            {
                favorites: provider.favorites
            }))
    }

    const setFilteredCoins = filteredCoins => {
        return setProvider({...provider, filteredCoins: filteredCoins})
    }

    return (
        <AppContext.Provider value={{provider, setProvider, confirmFavorites, addCoin, removeCoin, isInFavorites, setFilteredCoins}}>
            {props.children}
        </AppContext.Provider>
    )
}
