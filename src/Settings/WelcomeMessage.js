import React, {useContext} from "react";
import {AppContext} from "../App/AppProvider";

export default function(props) {
    const {provider} = useContext(AppContext);
    const {firstVisit} = provider;

    return firstVisit ? <div>Welcome to CryptoDash, please select your favorite coins to begin.</div>
        : null
}
