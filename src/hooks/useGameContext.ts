import { useContext } from "react";
import { ContextGame } from "../Context";

const useGameContext = () => {
    const value = useContext(ContextGame);
    if (!value) {
        throw Error('You should call useGameContext inside a GameProvider')
    }
    return value
}

export default useGameContext;