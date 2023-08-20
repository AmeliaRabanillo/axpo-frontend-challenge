import {useNavigate} from "react-router-dom";
import Groups from "@mui/icons-material/Groups";
import Memory from "@mui/icons-material/Memory";
import {PrimaryButton} from "../components/primary-button";


// @ts-ignore
const StartPage = (props) => {
    const navigate = useNavigate();
    //ToDo add background
    return (
        <div>
            <h1>Hello,</h1>
            <h2>Select what you want to search</h2>
            <PrimaryButton onClick={() => navigate('/population_density')}>
                <span>Population density</span>
                <Groups/></PrimaryButton>
            <PrimaryButton onClick={() => navigate('/drone_restriction',)}>
                <span>Drone description</span>
                <Memory/>
            </PrimaryButton>

        </div>
    );
}

export default StartPage;