import { FC } from "react";
import { StyledTimer } from "./styles";
interface Props {
    time: number
}
const Timer: FC<Props> = ({ time }) => {

    return (
        <StyledTimer>
            Time: <span>{time}</span> {time === 1 ? 'second' : 'seconds'}
        </StyledTimer>
    )

}

export default Timer;