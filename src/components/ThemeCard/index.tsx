import { FC } from "react";
import useGameContext from "../../hooks/useGameContext";
import PokemonTitle from '../../images/pokemonTitle.svg';
import RickAndMortyTitle from '../../images/RickAndMortyTitle.png';
import { StyledThemeCard } from "./styles";

interface Props {
    game: string
}

const ThemeCard: FC<Props> = ({ game }) => {
    const { setGame } = useGameContext();
    const src = game === 'pokemon' ? PokemonTitle : RickAndMortyTitle;
    const alt = game === 'pokemon' ? 'pokemon' : 'rick and morty';
    return (
        <StyledThemeCard>
            <img src={src} alt={alt} />
            <button onClick={() => setGame(game)} />
        </StyledThemeCard>
    )
}

export default ThemeCard;
