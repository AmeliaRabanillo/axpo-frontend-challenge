import {useNavigate} from "react-router-dom";
import {PrimaryButton} from "../components/primary-button";
import React from "react";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${(props) => props.theme.colors.black};
`;

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Div>
            <h1>404</h1>
            <h2>Not Found</h2>
            <PrimaryButton onClick={() => navigate('/',)}>
                <span>Go Home</span>
                <HomeIcon/>
            </PrimaryButton>
        </Div>
    );
}

export default NotFound;