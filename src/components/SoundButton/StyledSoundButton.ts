import styled from "styled-components";

export const StyledSoundButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    top: 1em;
    right: 1em;
    cursor: pointer;
    padding: 16px;
    .fas{
        color: #fff;
        font-size: 2em;
    }
    &:hover{
        .fas{
            color: var(--primary);
        }
    }
`