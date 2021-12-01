import type { FC } from "react";
import useBoard from "../../hooks/useBoard";
import useGameContext from "../../hooks/useGameContext";
import Board from "../Board";
import Loader from "../Loader";
import Timer from "../Timer";
import WonScreen from "../WonScreen";
import { StyledMain } from "./styles";

const Main: FC = () => {
    const { cards, flipped, onClickCard, wonPairs, onRestart, gameEnded, isLoading, gameTime } = useBoard();
    const { setGame } = useGameContext();

    if (isLoading) {
        return (
            <Loader />
        )
    }

    if (gameEnded) {
        return <WonScreen onRestart={onRestart} finalTime={gameTime} />
    }
    return (
        <StyledMain>
            <div className='container'>
                <Timer time={gameTime} />
                <div className='btn-container'>
                    <button onClick={onRestart}>reiniciar</button>
                    <button onClick={() => setGame('')}>volver</button>
                </div>
            </div>
            <Board cards={cards} onClickCard={onClickCard} wonPairs={wonPairs} flipped={flipped} />
        </StyledMain>
    )
}

export default Main;
