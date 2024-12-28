import {RainbowButton} from "./components/ui/rainbow-button.tsx";
import {useNavigate} from "react-router";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className={"text-center text-6xl text-cyan-900 font-black py-6"}>
                Welcome Bin Minkey
            </h1>
            <div className={"flex items-center justify-center"}>
                <RainbowButton onClick={() => navigate("/register")}>S'inscire</RainbowButton>
            </div>
        </>
    )
}

export default Home
