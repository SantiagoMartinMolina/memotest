import Charmander from '../../assets/images/charmander.png';
import Charmeleon from '../../assets/images/charmeleon.png';
import Charizard from '../../assets/images/charizard.png';
import { useState } from 'react';
import useSound from 'use-sound';
import buttonSound from '../../assets/sounds/buttonSound.mp3';


const PokemonEvolutionImg = () => {
    const [src, setSrc] = useState(Charmander);
    const [play] = useSound(buttonSound);

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {

        play();
        const leftClick = e.button === 0;

        if (src.includes('charmander')) {
            setSrc(leftClick ? Charmeleon : Charmander);
        } else if (src.includes('charmeleon')) {
            setSrc(leftClick ? Charizard : Charmander);
        } else if (src.includes('charizard')) {
            setSrc(leftClick ? Charizard : Charmeleon);

        }
    }

    return (
        <img onContextMenu={(e) => e.preventDefault()} onMouseUp={handleClick} src={src} alt='pokemon evolution' />
    )
}


export default PokemonEvolutionImg;