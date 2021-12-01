import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
    0% { transform: rotateZ(0) }
    100% { transform: rotateZ(360deg) }
`;

export const StyledLoader = styled.main`
    .spinner{
        width: 5em;
        height: 5em;
        border: 5px solid var(--bg-color-200);
        border-right-color: var(--primary);
        border-radius: 50%;
        animation: ${rotate} 1.2s linear infinite;
    }
`

