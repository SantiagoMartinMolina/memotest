import { createContext, FC, useState } from 'react';

interface Value {
    game: string
    setGame: React.Dispatch<React.SetStateAction<string>>
}

export const Context = createContext<Value | null>(null);

export const GameProvider: FC = ({ children }) => {
    const [game, setGame] = useState('');

    return <Context.Provider value={{ game, setGame }}>{children}</Context.Provider>
}

