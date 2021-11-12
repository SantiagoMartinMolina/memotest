import { FC } from 'react';
import { Card as ICard } from '../../types';
import pokeball from '../../assets/images/Pokeball.png';
import rickAndMorty from '../../assets/images/RickAndMorty.png';
import { StyledCard } from './styles';
import useGameContext from '../../hooks/useGameContext';

interface Props extends ICard {
    onClick: (key: string) => void
    flipped: boolean
}

const Card: FC<Props> = ({ src, name, flipped, onClick, id }) => {
    const { game } = useGameContext();
    return (
        <StyledCard onClick={() => onClick(id!)}>
            <div className={`card-inner ${flipped && 'card-flipped'}`}>
                <div className="card-front">
                    <img src={game === 'pokemon' ? pokeball : rickAndMorty} alt='card' />
                </div>
                <div className="card-back">
                    <img src={src} className={game === 'rickAndMorty' ? 'rick-img' : undefined} alt='card' />
                </div>
            </div>
        </StyledCard>
    )
}

export default Card;
