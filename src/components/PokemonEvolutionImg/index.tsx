import Charmander from '../../assets/images/charmander.png';
import Charmeleon from '../../assets/images/charmeleon.png';
import Charizard from '../../assets/images/charizard.png';
import { FC, useState } from 'react';
import useSound from 'use-sound';
import evolution1 from '../../assets/sounds/evolution1.mp3';
import evolution2 from '../../assets/sounds/evolution2.mp3';
import useSoundContext from '../../hooks/useSoundContext';

const PokemonEvolutionImg: FC = () => {
    const [src, setSrc] = useState(Charmander);
    const { soundActive } = useSoundContext();
    const [play1] = useSound(evolution1, { soundEnabled: soundActive, volume: 0.05 });
    const [play2] = useSound(evolution2, { soundEnabled: soundActive, volume: 0.05 });

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        const leftClick = e.button === 0;
        if (src.includes('charmander')) {
            if (leftClick) {
                play1();
                setSrc(Charmeleon);
            }
        } else if (src.includes('charmeleon')) {
            if (leftClick) {
                play1();
                setSrc(Charizard);
            } else {
                play2();
                setSrc(Charmander);
            }
        } else if (src.includes('charizard')) {
            if (!leftClick) {
                play2();
                setSrc(Charmeleon);
            }
        }
    }

    return (
        <img onContextMenu={(e) => e.preventDefault()} onMouseUp={handleClick} src={src} alt='pokemon evolution' />
    )
}


export default PokemonEvolutionImg;
