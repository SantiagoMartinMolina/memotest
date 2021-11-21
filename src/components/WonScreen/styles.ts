import styled from "styled-components";

export const StyledWonScreen = styled.main`

    h2{
        font-family: 'Irish Grover',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen', 'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue', sans-serif;;
        font-size: 5rem;
        color: var(--primary);
    }

    button{
        display: block;
        margin: 2em auto;
        width: 100%;
        border: none;
        background-color: var(--primary);
        cursor: pointer;
        padding: 0.5em 1em;
        border-radius: 10px;
        font-family: inherit;
        font-size: 1em;
        color: #fff;
        font-weight: 700;
        transition: transform 200ms ease;
    }

    button:hover{
        transform: rotate(3deg) scale(1.1);
    }

    button:active{
        transform: scale(0.95);
    }

    button:first-child{
        margin-right: 1em;
    }
`