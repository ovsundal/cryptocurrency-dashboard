import React, {useEffect, useState} from 'react';
export const AppContext = React.createContext();

const cc = require('cryptocompare');


export const AppProvider = (props) => {
    const [provider, setProvider] = useState({page: 'dashboard', });
    const [settings, setSettings] = useState({});
    const [coinList, setCoinList] = useState({});

    useEffect(() => {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData) {
            setProvider({page: 'settings', firstVisit: true})
        }
    }, [])

    useEffect(() => {
        const getCoinList = async () => {
            let coinList = (await cc.coinList()).Data;
            setCoinList(coinList);
        }
        getCoinList();
    }, [])

    const confirmFavorites = () => {
        console.log('Hello');
        setProvider({
            ...provider,
            firstVisit: false,
            page: 'dashboard',
        })
        localStorage.setItem('cryptoDash', JSON.stringify(
            {
                test: 'hello'
            }))
    }



    return (
        <AppContext.Provider value={{provider, setProvider, settings, setSettings, confirmFavorites}}>
            {props.children}
        </AppContext.Provider>
    )
}
