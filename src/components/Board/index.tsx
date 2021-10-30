import { FC } from "react";
import useBoard from "../../hooks/useBoard";
import Card from "../Card";
import { StyledBoard } from "./styles";

const Board: FC = () => {
    const { cards, flipped, onClickCard, wonPairs, onRestart, gameEnded, startTimer } = useBoard();
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
                        <button onClick={onRestart}>restart</button>
                    </StyledBoard>
            }
        </>
    )
}

export default Board;

