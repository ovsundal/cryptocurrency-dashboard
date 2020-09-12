import React, {useContext} from 'react';
import {AppContext} from "../App/AppProvider";
import styled from "styled-components";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function() {
    const {provider, setProvider, confirmFavorites} = useContext(AppContext);

        return (
            <CenterDiv>
                <ConfirmButtonStyled onClick={confirmFavorites}>
                    Confirm Favorites
                </ConfirmButtonStyled>
            </CenterDiv>
    )

}