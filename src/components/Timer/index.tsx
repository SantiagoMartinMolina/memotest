import { FC, useEffect, useRef, useState } from "react";
interface Props {
    startTimer: boolean
    gameEnded: boolean
}
const Timer: FC<Props> = ({ startTimer, gameEnded }) => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (gameEnded) {
            clearInterval(intervalRef.current as NodeJS.Timeout);
        } else {
            if (startTimer) {
                setTime(0);
                intervalRef.current = setInterval(() => {
                    setTime(prev => prev + 1)
                }, 1000);
            }
            if (!startTimer) {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            }
        }

        return () => { clearInterval(intervalRef.current as NodeJS.Timeout); }
    }, [startTimer, gameEnded]);

    return (
        <div>Tiempo: {time} segundos</div>
    )

}

export default Timer;