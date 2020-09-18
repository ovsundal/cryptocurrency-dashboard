import React from 'react';
import './App.css';
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import {AppProvider} from "./AppProvider";
import Settings from "../Settings/index.js"
import DashBoard from "../Dashboard/index.js"
import Content from "../Shared/Content";
import {setApiKey} from "cryptocompare";

function App() {
    setApiKey('916d275830a4bf79fa4156f45cb7d76e0e4a7539a4a082362a24c57915e38b26');

    return (
        <AppLayout>
            <AppProvider>
                <AppBar />
                <Content>
                    <Settings />
                    <DashBoard />
                </Content>
            </AppProvider>
        </AppLayout>
    );
}

export default App;
