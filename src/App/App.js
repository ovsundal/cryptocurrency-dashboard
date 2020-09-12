import React from 'react';
import './App.css';
import WelcomeMessage from "../Settings/WelcomeMessage";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import {AppProvider} from "./AppProvider";
import ConfirmButton from "../Settings/ConfirmButton";


function App() {
    return (
        <AppLayout>
            <AppProvider>
                <AppBar />
                <WelcomeMessage />
                <ConfirmButton></ConfirmButton>
            </AppProvider>
        </AppLayout>
    );
}

export default App;
