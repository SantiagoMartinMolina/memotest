import type { FC } from "react";
import Timer from "../Timer";
import { StyledWonScreen } from "./styles";

interface Props {
    onRestart: () => void
    finalTime: number
}

const WonScreen: FC<Props> = ({ onRestart, finalTime }) => {
    return (
        <StyledWonScreen >
            <h2>Ganaste!</h2>
            {/* <p>Tiempo: <span>{finalTime}</span> segundos</p> */}
            <Timer time={finalTime} />
            <button onClick={onRestart}>jugar de nuevo</button>
        </StyledWonScreen>
    )
}

export default WonScreen;
