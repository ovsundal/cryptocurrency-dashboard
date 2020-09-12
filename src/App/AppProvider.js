import React, {useState} from 'react';
export const AppContext = React.createContext();


export const AppProvider = (props) => {
    const [provider, setProvider] = useState({page: 'dashboard'})

    return (
        <AppContext.Provider value={{provider, setProvider}}>
            {props.children}
        </AppContext.Provider>
    )
}
