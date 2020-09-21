import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../App/AppProvider";
import styled from "styled-components";
import * as cc from "cryptocompare";
import PriceTile from "./PriceTile";
import moment from 'moment';

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

const TIME_UNITS = 10;

export default function() {

    const [prices, setPrices] = useState([]);
    const {provider, setHistoricalData} = useContext(AppContext)
    const {currentFavorite, favorites, firstVisit, timeInterval} = provider;

    // get pricing data
    useEffect(() => {
        const getPricingData = async() => {
            const priceData = [];

            if(!favorites) {
                return;
            }

            for (const fav of favorites) {
                try {
                    const coinPrice = await cc.priceFull(fav, 'USD');
                    priceData.push(coinPrice);

                } catch (e) {
                    console.warn('Fetch price error: ', e);
                }
            }
            setPrices(priceData);
        }
        getPricingData();

    }, [])

    useEffect(() => {
        let promises = [];

        if(firstVisit) {
            return;
        }

        const fetchHistorical = async() => {
            for(let units = TIME_UNITS; units > 0; units--) {
                promises.push(
                    await cc.priceHistorical(
                        currentFavorite,
                        ['USD'],
                        moment()
                            .subtract({[timeInterval]: units})
                            .toDate()
                    )
                )
            }

            let historical = [
                {
                    name: currentFavorite,
                    data: promises.map((ticker, index) => [
                        moment().subtract({[timeInterval]: TIME_UNITS - index}).valueOf(),
                        ticker.USD
                    ])
                }
            ]

            setHistoricalData(historical)
        }

        fetchHistorical();

    }, [currentFavorite, timeInterval])

    return (
        <PriceGrid>
            {prices.map((price, index) => <PriceTile key={index} index={index} price={price} />)}
        </PriceGrid>
    )
}

