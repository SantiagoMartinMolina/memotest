import { useState, useRef } from 'react';
import { Card } from '../types';
import differentCards from '../utils/CardList';

const shuffleArray = (array: Card[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const createInitialCards = () => {
    let initialCards: Card[] = [];
    differentCards.forEach(({ name, src }) => {
        initialCards.push({ name, src, id: `${name}-1` });
        initialCards.push({ name, src, id: `${name}-2` });
    });
    return shuffleArray(initialCards);
}

const useBoard = () => {
    const [cards, setCards] = useState(createInitialCards);
    const [flipped, setFlipped] = useState<string[]>([]);
    const [wonPairs, setWonPairs] = useState<string[]>([]);
    const [startTimer, setStartTimer] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout>();
    const gameEnded = wonPairs.length === cards.length / 2;

    const onClickCard = (key: string) => {
        if (!startTimer) {
            setStartTimer(true);
        }
        if (!flipped.includes(key) && flipped.length < 2) {
            setFlipped([...flipped, key]);
            const newLength = flipped.length + 1;

            if (newLength === 2) {
                const firstName = flipped[0].slice(0, -2);
                const secondName = key.slice(0, -2);

                if (firstName === secondName) {
                    setWonPairs([...wonPairs, firstName]);
                    setFlipped([]);
                } else {
                    timeoutRef.current = setTimeout(() => { setFlipped([]) }, 1000);
                }

            }
        } else if (!flipped.includes(key) && flipped.length === 2) {
            clearTimeout(timeoutRef.current as NodeJS.Timeout);
            setFlipped([key]);
        }
    };

    const onRestart = () => {
        setCards(createInitialCards);
        setWonPairs([]);
        setFlipped([]);
        setStartTimer(false);
    };

    return { cards, flipped, onClickCard, onRestart, wonPairs, gameEnded, startTimer };
}

export default useBoard;
