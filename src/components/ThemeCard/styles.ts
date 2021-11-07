import styled from "styled-components";

export const StyledThemeCard = styled.div`
    /* width: 200px; */
    background-color: #ffc5bc;
    /* padding: 1em; */
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img, picture{
        width: 100%;
        height: 100%;
        object-fit: cover;  
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

    @media (max-width: 800px){
        img, picture{
            max-height: 300px;
        }
    }
    @media (max-width: 500px){
        img, picture{
            max-height: 170px;
            object-position: top;
        }
    }
`