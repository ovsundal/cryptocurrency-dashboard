import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../App/AppProvider";
import styled from "styled-components";
import * as cc from "cryptocompare";
import PriceTile from "./PriceTile";

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

export default function() {

    const [prices, setPrices] = useState([]);

    const {provider} = useContext(AppContext)

    // get pricing data
    useEffect(() => {
        const getPricingData = async() => {
            const priceData = [];

            if(!provider.favorites) {
                return;
            }

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
            {prices.map((price, index) => <PriceTile key={index} index={index} price={price} />)}
        </PriceGrid>
    )
}

