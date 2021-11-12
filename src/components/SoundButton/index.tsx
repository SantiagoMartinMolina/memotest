import React from 'react'
import useSoundContext from '../../hooks/useSoundContext';
import { StyledSoundButton } from './StyledSoundButton';

const SoundButton = () => {
    const { soundActive, setSoundActive } = useSoundContext();

    return (
        <StyledSoundButton onClick={() => setSoundActive(prev => !prev)}>
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
