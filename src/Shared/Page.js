import React, {useContext} from 'react';
import {AppContext} from "../App/AppProvider";

export default function({name, children}) {
    const {provider} = useContext(AppContext);
    const {page} = provider;

    if(page !== name) {
        return null;
    }

    return <div>{children}</div>
}
