import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../App/AppProvider";
import styled from "styled-components";
import * as cc from "cryptocompare";

const PriceGrid = styled.div`
  display: grid;
`

export default function() {

    const [prices, setPrices] = useState([]);

    const {provider} = useContext(AppContext)

    // get pricing data
    useEffect(() => {
        const getPricingData = async() => {
            const priceData = [];
            for (const fav of provider.favorites) {
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

    return (
        <PriceGrid>
            {prices.map(price => <div>{Object.keys(price)[0]}</div>)}
        </PriceGrid>
    )
}

