import { FC } from "react";
import useBoard from "../../hooks/useBoard";
import useGameContext from "../../hooks/useGameContext";
import Card from "../Card";
import Timer from "../Timer";
import { StyledBoard } from "./styles";

const Board: FC = () => {
    const { cards, flipped, onClickCard, wonPairs, onRestart, gameEnded, startTimer, isLoading } = useBoard();
    const { setGame } = useGameContext();
    if (isLoading) {
        return <div>CARGANDO</div>
    }
    return (
        <>
            {
                gameEnded ?
                    <div style={{ textAlign: 'center' }}>
                        <p>Ganaste</p>
                        <button onClick={onRestart}>jugar de nuevo</button>
                    </div>
                    :
                    <StyledBoard>
                        {
                            cards.map(({ id, name, src }) => {
                                return (
                                    <Card key={id} name={name} src={src} id={id} onClick={onClickCard} flipped={wonPairs.includes(name) || flipped.includes(id!)} />
                                )
                            })
                        }
                        <button onClick={onRestart}>reiniciar</button>
                        <button onClick={() => setGame('')}>volver</button>

                    </StyledBoard>
            }
            <Timer startTimer={startTimer} gameEnded={gameEnded} />

        </>
    )
}

export default Board;

