import { useContext } from "react";
import { ContextSound } from "../Context";

const useSoundContext = () => {
    const value = useContext(ContextSound);
    if (!value) {
        throw Error('You should call useSoundContext inside a SoundProvider')
    }
    return value
}

export default useSoundContext;