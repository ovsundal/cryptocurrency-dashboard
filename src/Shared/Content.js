import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";

export default function(props) {
    const {provider, priceData} = useContext(AppContext);
    const {coinList, firstVisit} = provider;

    if(!coinList) {
        return <div>Loading Coins</div>
    }

    return (
        <div>{props.children}</div>
    )
}
