import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";

export default function(props) {
    const {provider} = useContext(AppContext);
    const {coinList} = provider;

    if(!coinList) {
        return <div>Loading Coins</div>
    }

    return (
        <div>{props.children}</div>
    )
}
