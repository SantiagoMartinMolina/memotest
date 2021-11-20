import { FC } from "react";
import useBoard from "../../hooks/useBoard";
import useGameContext from "../../hooks/useGameContext";
import Card from "../Card";
import Timer from "../Timer";
import { StyledBoard, StyledMain } from "./styles";

const Main: FC = () => {
    const { cards, flipped, onClickCard, wonPairs, onRestart, gameEnded, startTimer, isLoading } = useBoard();
    const { setGame } = useGameContext();

    if (isLoading) {
        return <div>CARGANDO</div>
    }

    return (
        <StyledMain>
            <div className='container'>
                <Timer startTimer={startTimer} gameEnded={gameEnded} />
                <div className='btn-container'>
                    <button onClick={onRestart}>reiniciar</button>
                    <button onClick={() => setGame('')}>volver</button>
                </div>
            </div>
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
                    </StyledBoard>
            }
        </StyledMain>
    )
}

export default Main;
