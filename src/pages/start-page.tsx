import {useNavigate} from "react-router-dom";
import Groups from "@mui/icons-material/Groups";
import Memory from "@mui/icons-material/Memory";
import {PrimaryButton} from "../components/primary-button";
import {H1, H2} from "../styled/headings";
import React from "react";
import {ButtonContainer} from "../components/button-container";
import {SEARCH_TYPE_DISPLAY_MAP} from "../utils/constants";
import styled from "styled-components";
import {mediaQueries} from "../styled/media-queries-breakpoints";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${mediaQueries.lessThan("medium")`   
    flex-direction: column;
    align-items: stretch;
  `};
`;

const Img = styled.img`
  max-width: 500px;
  min-width: 370px;

  mask-repeat: no-repeat;
  mask-image: url('/headerMaskMobile.svg');
  mask-size: 100%;
  mask-position: bottom;

  ${mediaQueries.lessThan("medium")`  
    max-width: unset;
    width: 100%;
  `};
`;

const Container = styled.div`
  ${mediaQueries.greaterThan("medium")`  
    margin-left: 24px;
  `};
`;

const StartPage = () => {
    const navigate = useNavigate();
    return (
        <Div>
            <Img
                src='https://www.axpo.com/es/es/nuestros-clientes/_jcr_content/root/stage/stagev1/image1.coreimg.82.1280.png/1676642395487/0622-e-world-stage-wind-medium.png'/>

            <Container className='main-container'>
                <H1>Hello,</H1>
                <H2>Select what you want to search</H2>
                <ButtonContainer>
                    <PrimaryButton onClick={() => navigate('/population_density')}>
                        <span>{SEARCH_TYPE_DISPLAY_MAP['population_density']}</span>
                        <Groups/></PrimaryButton>
                    <PrimaryButton onClick={() => navigate('/drone_restriction',)}>
                        <span>{SEARCH_TYPE_DISPLAY_MAP['drone_restriction']}</span>
                        <Memory/>
                    </PrimaryButton>
                </ButtonContainer>
            </Container>
        </Div>
    )
        ;
}

export default StartPage;