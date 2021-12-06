import { StyledBoard } from './styles'
import Card from "../Card";
import type { FC } from 'react';
import { memo } from 'react';
import type { Card as ICard } from '../../types';

interface Props {
    cards: ICard[]
    onClickCard: (key: string) => void
    wonPairs: string[]
    flipped: string[]
}

const Board: FC<Props> = ({ cards, onClickCard, wonPairs, flipped }) => {
    return (
        <StyledBoard>
            {
                cards.map(({ id, name, src, species }) => {
                    const flippedCondition = species ? wonPairs.includes(name + '-' + species) : wonPairs.includes(name);
                    return (
                        <Card key={id} name={name} src={src} id={id} onClick={onClickCard} flipped={flippedCondition || flipped.includes(id!)} />
                    )
                })
            }
        </StyledBoard>
    )
}

export default memo(Board);
