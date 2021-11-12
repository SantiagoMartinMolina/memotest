import styled from "styled-components";

export const StyledCard = styled.div`
    width: 100px;
    height: 100px;
    transition: transform 200ms ease;

    @media (max-width: 500px){
        width: 60px;
        height: 60px;
    }

    img{
        width: 100%;
        height: 100%;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        
        &.rick-img{
            border-radius: 50%;

        }
    }

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

    &:focus{
        transform: scale(1.1);
        cursor: pointer;
    }

    .card-front, .card-back{
        position: absolute;
        width: 100%;
        height: 100%;
        --webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 4px;
    }

    .card-inner{
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .card-back{
        transform: rotateY(180deg);
    }

    .card-flipped{
        transform: rotateY(180deg);
    }

`