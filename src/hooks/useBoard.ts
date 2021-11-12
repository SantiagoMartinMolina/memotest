import { useState, useRef, useEffect } from 'react';
import { Card } from '../types';
import useGameContext from './useGameContext';
import { useQueryClient } from 'react-query';

const shuffleArray = (array: Card[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const getRandomCards = (num: number, cards: Card[]) => {
    let result = [];
    let addedIndex: number[] = [];
    for (let i = 0; i < num; i++) {
        let randomIndex = Math.trunc(Math.random() * 100);
        if (!addedIndex.includes(randomIndex)) {
            result.push(cards[randomIndex]);
            addedIndex.push(randomIndex);
        } else {
            i--;
        }
    };
    return result;
}

const createInitialCards = (data: Card[]) => {
    let initialCards: Card[] = [];
    let randomCards = getRandomCards(8, data);
    randomCards?.forEach(({ name, src }) => {
        initialCards.push({ name, src, id: `${name}-1` });
        initialCards.push({ name, src, id: `${name}-2` });
    });
    return shuffleArray(initialCards);
}

const useBoard = () => {
    const queryClient = useQueryClient();
    const { game } = useGameContext();
    const data: Card[] = queryClient.getQueryData(game)!;
    const [cards, setCards] = useState<Card[]>([]);
    const [flipped, setFlipped] = useState<string[]>([]);
    const [wonPairs, setWonPairs] = useState<string[]>([]);
    const [startTimer, setStartTimer] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout>();
    const gameEnded = wonPairs.length === cards.length / 2;
    const isLoading = cards.length === 0;

    useEffect(() => {
        data && setCards(createInitialCards(data));
    }, [data])

    const onClickCard = (key: string) => {
        if (!startTimer) {
            setStartTimer(true);
        }

        if (wonPairs.includes(key.slice(0, -2))) {
            return
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
        setCards(createInitialCards(data));
        setWonPairs([]);
        setFlipped([]);
        setStartTimer(false);
    };

    return { cards, flipped, onClickCard, onRestart, wonPairs, gameEnded, startTimer, isLoading };
}

export default useBoard;
