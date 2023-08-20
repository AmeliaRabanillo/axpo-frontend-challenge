import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 570px) {//ToDo add screen breakpoints to theme
    flex-direction: column;

    button {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;