import { FC } from 'react';
import { Card as ICard } from '../../types';
import pokeball from '../../images/Pokeball.png';
import { StyledCard } from './styles';

interface Props extends ICard {
    onClick: (key: string) => void
    flipped: boolean
}

const Card: FC<Props> = ({ src, name, flipped, onClick, id }) => {
    return (
        <StyledCard onClick={() => onClick(id!)}>
            <div className={`card-inner ${flipped && 'card-flipped'}`}>
                <div className="card-front">
                    <img src={pokeball} alt={name} />
                </div>
                <div className="card-back">
                    <img src={src} alt={name} />
                </div>
            </div>
        </StyledCard>
    )
}

export default Card;
