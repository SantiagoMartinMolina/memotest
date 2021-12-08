import { FC, useEffect } from "react";
import Timer from "../Timer";
import { StyledWonScreen } from "./styles";
import useSound from 'use-sound';
import aplauseSound from '../../assets/sounds/aplause.mp3';
import useSoundContext from '../../hooks/useSoundContext';

interface Props {
    onRestart: () => void
    finalTime: number
}

const WonScreen: FC<Props> = ({ onRestart, finalTime }) => {

    const { soundActive } = useSoundContext();
    const [playAplauseSound] = useSound(aplauseSound, { soundEnabled: soundActive, volume: 0.15 })

    useEffect(() => {
        playAplauseSound();
    }, [playAplauseSound])

    return (
        <StyledWonScreen >
            <h2>You win!</h2>
            {/* <p>Tiempo: <span>{finalTime}</span> segundos</p> */}
            <Timer time={finalTime} />
            <button onClick={onRestart}>Play again</button>
        </StyledWonScreen>
    )
}

export default WonScreen;
