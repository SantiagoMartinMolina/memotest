import { createContext, FC, useState } from 'react';

interface Game {
    game: string
    setGame: React.Dispatch<React.SetStateAction<string>>
}

interface Sound {
    soundActive: boolean
    setSoundActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContextGame = createContext<Game | null>(null);

export const ContextSound = createContext<Sound | null>(null);

export const GameProvider: FC = ({ children }) => {
    const [game, setGame] = useState('');

    return <ContextGame.Provider value={{ game, setGame }}>{children}</ContextGame.Provider>
}

export const SoundProvider: FC = ({ children }) => {
    const [soundActive, setSoundActive] = useState(true);

    return <ContextSound.Provider value={{ soundActive, setSoundActive }}>{children}</ContextSound.Provider>
}



