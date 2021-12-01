import useSoundContext from '../../hooks/useSoundContext';
import { StyledSoundButton } from './StyledSoundButton';
import useSound from 'use-sound';
import offSound from '../../assets/sounds/offSound.mp3';
import onSound from '../../assets/sounds/onSound.mp3';


const SoundButton = () => {
    const { soundActive, setSoundActive } = useSoundContext();
    const [playOff] = useSound(offSound, { volume: 0.50 });
    const [playOn] = useSound(onSound, { volume: 0.25 });

    const handleClick = () => {
        setSoundActive(prev => !prev);
        if (soundActive) {
            playOff();
        } else {
            playOn();
        }
    }

    return (
        <StyledSoundButton onClick={handleClick} aria-label={soundActive ? 'turn sound off' : 'turn sound on'}>
            {
                soundActive
                    ?
                    <i className="fas fa-volume-up" />
                    :
                    <i className="fas fa-volume-mute" />
            }
        </StyledSoundButton>
    )
}

export default SoundButton
