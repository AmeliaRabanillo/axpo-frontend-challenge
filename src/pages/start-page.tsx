import {useNavigate} from "react-router-dom";
// @ts-ignore
import styled from "styled-components";
import Groups from "@mui/icons-material/Groups";
import Memory from "@mui/icons-material/Memory";
import {PrimaryButton} from "../components/primary-button";
import {H1, H2} from "../styled/headings";
import React from "react";
import { ButtonContainer } from "../components/button-container";


// @ts-ignore
const StartPage = (props) => {
    const navigate = useNavigate();
    //ToDo add background
    return (
        <div>
            <H1>Hello,</H1>
            <H2>Select what you want to search</H2>
            <ButtonContainer>
                <PrimaryButton onClick={() => navigate('/population_density')}>
                    <span>Population density</span>
                    <Groups/></PrimaryButton>
                <PrimaryButton onClick={() => navigate('/drone_restriction',)}>
                    <span>Drone description</span>
                    <Memory/>
                </PrimaryButton>
            </ButtonContainer>
        </div>
    );
}

export default StartPage;