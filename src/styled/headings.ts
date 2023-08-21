import styled from "styled-components";
import {css} from 'styled-components';

export const typographyCommons = css`
  color: ${(props) => props.theme.colors.black};
`;

export const H1 = styled.h1`
  ${typographyCommons};
  font-size: ${(props) => props.theme.fontSizes.large}${(props) => props.theme.fontMeasureUnit};  
`;

export const H2 = styled.h2`
  ${typographyCommons};
  font-size: ${(props) => props.theme.fontSizes.medium}${(props) => props.theme.fontMeasureUnit};  
`;

export const H3 = styled.h3`
  ${typographyCommons};
  font-size: ${(props) => props.theme.fontSizes.small}${(props) => props.theme.fontMeasureUnit};
`;
