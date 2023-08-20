import styled from "styled-components";

export const PrimaryButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 16px;

  margin: 20px;
  padding: 16px;

  display: flex;
  align-items: center;
  
  border: none;
  border-radius: 25px;

  span {
    margin-right: 12px;
  }

  :hover {
    cursor: pointer;
  }
`;