import React, {useContext} from 'react';
import {AppContext} from "../App/AppProvider";
import styled from "styled-components";
import {color3, fontSize1, greenBoxShadow} from "../Shared/Styles";


const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1};
  cursor: pointer;
  padding: 5px;
  
  &:hover {
    ${greenBoxShadow}
  }
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
