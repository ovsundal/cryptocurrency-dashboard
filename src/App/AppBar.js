import React, {useContext} from "react";
import styled, {css} from "styled-components";
import {AppContext} from "./AppProvider";

const Logo =styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0 0 60px #03ff03, 0 0 60px #03ff03, 0 0 60px #03ff03;
  `}
  ${props => props.hidden && css`
    display: none;
  `}
`;

function toProperCase(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}) {
    const {provider, setProvider} = useContext(AppContext);
    const {firstVisit, page} = provider;

    return (
        <ControlButtonElem
            active={page === name}
            onClick={() => setProvider({...provider, page: name})}
            hidden={firstVisit && name === 'dashboard'}
        >
            {toProperCase(name)}
        </ControlButtonElem>
    )
}

export default function (){
    return <Bar>
        <Logo>CryptoDash</Logo>
        <div/>
        <ControlButton active name={"dashboard"}/>
        <ControlButton name={"settings"}/>
    </Bar>
}
