import { FC } from "react";
import useGameContext from "../../hooks/useGameContext";
import pokemonPortada from '../../images/pokemonPortada.png';
import rickAndMortyPortada from '../../images/rickAndMortyPortada.jpg';
import { StyledThemeCard } from "./styles";

interface Props {
    game: string
}

const ThemeCard: FC<Props> = ({ game }) => {
    const { setGame } = useGameContext();
    const src = game === 'pokemon' ? pokemonPortada : rickAndMortyPortada;
    const alt = game === 'pokemon' ? 'pokemon' : 'rick and morty';
    return (
        <StyledThemeCard>
            <img src={src} alt={alt} />
            <button onClick={() => setGame(game)} />
        </StyledThemeCard>
    )
}

export default ThemeCard;
