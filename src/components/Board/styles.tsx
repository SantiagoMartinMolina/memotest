import styled from 'styled-components';

export const StyledBoard = styled.div`
    margin: auto;
    max-width: 500px;
    padding: 1em;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
    grid-gap: 1em;
    background-color: blue;
`