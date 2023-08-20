import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import {CircularButton} from "./circular-button";
import * as React from "react";
import {useNavigate} from "react-router-dom";

interface BackButtonProps {
    goToUrl: string;
}

const BackButton = (props: BackButtonProps) => {
    const {goToUrl} = props

    const navigate = useNavigate();

    return (<CircularButton onClick={() => navigate(goToUrl)}><KeyboardBackspace/></CircularButton>);
}

export default BackButton;

