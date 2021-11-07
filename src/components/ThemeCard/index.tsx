import { FC } from "react";
import useGameContext from "../../hooks/useGameContext";
import pokemonPortada from '../../images/pokemonPortada.png';
import pokemonPortada2 from '../../images/pokemonPortada2.jpg';
import rickAndMortyPortada2 from '../../images/rickAndMortyPortada2.jpg';


import rickAndMortyPortada from '../../images/rickAndMortyPortada.jpg';
import { StyledThemeCard } from "./styles";

interface Props {
    game: string
}

const ThemeCard: FC<Props> = ({ game }) => {
    const { setGame } = useGameContext();
    const src = game === 'pokemon' ? pokemonPortada : rickAndMortyPortada;
    const src2 = game === 'pokemon' ? pokemonPortada2 : rickAndMortyPortada2;
    const alt = game === 'pokemon' ? 'pokemon' : 'rick and morty';
    return (
        <StyledThemeCard>
            <picture>
                <source srcSet={src2} media="(max-width: 800px)" />
                <img src={src} alt={alt} />
            </picture>
            <button onClick={() => setGame(game)} />
        </StyledThemeCard>
    )
}

export default ThemeCard;
