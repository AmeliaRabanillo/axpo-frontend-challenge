import {useNavigate} from "react-router-dom";

const StartPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hello, select what you want to search</h1>
            <button onClick={() => navigate('/population_density')}> Population density</button>
            <button onClick={() => navigate('/drone_restriction',)}> Drone description</button>
        </div>
    );
}

export default StartPage;