import { useContext } from "react";
import { Context } from "../Context";

const useGameContext = () => {
    const value = useContext(Context);
    if (!value) {
        throw Error('You should call useGameContext inside a GameProvider')
    }
    return value
}

export default useGameContext;