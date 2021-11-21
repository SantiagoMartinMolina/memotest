import { FC } from "react";
import { StyledTimer } from "./styles";
interface Props {
    time: number
}
const Timer: FC<Props> = ({ time }) => {

    return (
        <StyledTimer>
            Tiempo: <span>{time}</span> segundos
        </StyledTimer>
    )

}

export default Timer;