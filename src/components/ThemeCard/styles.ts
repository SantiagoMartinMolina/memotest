import styled from "styled-components";

export const StyledThemeCard = styled.div`
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: transform 200ms ease;

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
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: inherit;

        span{
            display: inline-block;
            padding: 0.7rem 1.4rem;
            background-color: var(--primary);
            border-radius: 10px;
            font-weight: bold;
            font-size: 1.3em;
            transform: translate(-50%, 250px);
            transition: transform 200ms ease;
            position: absolute;
            bottom: 25px;
            color: #fff
        }

        &:hover{
            span{
                transform: translate(-50%, 0);
            }
        }
    }

    &:hover{
        transform: rotate(3deg) scale(1.05);
    }

    @media (max-width: 800px){
        img, picture{
            max-height: 300px;
        }
    }
    @media (max-width: 720px){
        img, picture{
            max-height: 170px;
            object-position: top;
        }
    }
`