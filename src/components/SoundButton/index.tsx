import React from 'react'
import useSoundContext from '../../hooks/useSoundContext';

const SoundButton = () => {
    const { soundActive, setSoundActive } = useSoundContext();

    return (
        <button onClick={() => setSoundActive(prev => !prev)}>
            {
                soundActive
                    ?
                    <i className="fas fa-volume-up"></i>
                    :
                    <i className="fas fa-volume-mute"></i>

            }

        </button>
    )
}

export default SoundButton
