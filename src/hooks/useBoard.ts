import { useState, useRef, useEffect } from 'react';
import { Card } from '../types';
import useGameContext from './useGameContext';
import { useQueryClient } from 'react-query';
import useSound from 'use-sound';
import flipSound from '../assets/sounds/flipSound.mp3';
import successSound from '../assets/sounds/success.mp3';
import useSoundContext from './useSoundContext';


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
    randomCards?.forEach(({ name, src, species }) => {
        let id = species ? `${name}-${species}` : name
        initialCards.push({ name, src, id: `${id}-1`, species });
        initialCards.push({ name, src, id: `${id}-2`, species });
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
    const [gameTime, setGameTime] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout>();
    const { soundActive } = useSoundContext();
    const [playFlipSound] = useSound(flipSound, { volume: 0.15, soundEnabled: soundActive });
    const [playSuccessSound] = useSound(successSound, { volume: 0.10, soundEnabled: soundActive });

    useEffect(() => {
        data && setCards(createInitialCards(data));
    }, [data])

    if (gameEnded) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
    }

    const onClickCard = (key: string) => {

        if (wonPairs.length === 7 && flipped.length === 1) {
            clearInterval(intervalRef.current as NodeJS.Timeout);
        }

        if (!startTimer) {
            setStartTimer(true);
            intervalRef.current = setInterval(() => {
                setGameTime(prev => prev + 1);
            }, 1000)
        }

        if (wonPairs.includes(key.slice(0, -2))) {
            return
        }

        if (!flipped.includes(key) && flipped.length < 2) {
            setFlipped([...flipped, key]);
            const newLength = flipped.length + 1;
            playFlipSound();

            if (newLength === 2) {
                const firstName = flipped[0].slice(0, -2);
                const secondName = key.slice(0, -2);

                if (firstName === secondName) {
                    playSuccessSound();

                    if (wonPairs.length === 7) {
                        setTimeout(() => {
                            setWonPairs([...wonPairs, firstName]);
                            setFlipped([]);
                        }, 600)
                    } else {
                        setWonPairs([...wonPairs, firstName]);
                        setFlipped([]);
                    }

                } else {
                    timeoutRef.current = setTimeout(() => { setFlipped([]) }, 1000);
                }

            }
        } else if (!flipped.includes(key) && flipped.length === 2) {
            clearTimeout(timeoutRef.current as NodeJS.Timeout);
            setFlipped([key]);
            playFlipSound();
        }
    };

    const onRestart = () => {
        setCards(createInitialCards(data));
        setWonPairs([]);
        setFlipped([]);
        setStartTimer(false);
        setGameTime(0);
        clearInterval(intervalRef.current as NodeJS.Timeout);
    };

    return { cards, flipped, onClickCard, onRestart, wonPairs, gameEnded, isLoading, gameTime };
}

export default useBoard;
