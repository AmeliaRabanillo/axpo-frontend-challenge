import styled from "styled-components";
import {mediaQueries} from "../styled/media-queries-breakpoints";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  ${mediaQueries.lessThan("small")`   
    flex-direction: column;

    button {
      margin-left: 0;
      margin-right: 0;
    } 
  `};
`;