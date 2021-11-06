import styled from "styled-components";

export const StyledThemeCard = styled.div`
    /* width: 200px; */
    /* background-color: #ffc5bc; */
    /* padding: 1em; */
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
    button{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
`