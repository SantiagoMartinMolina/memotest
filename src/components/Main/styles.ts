import styled from 'styled-components';

export const StyledBoard = styled.div`
    padding: 1em;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
`

export const StyledMain = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr min(90vw, 500px) 1fr;

    .container{
        margin: 0 auto;
        padding: 1em;
        display: flex;
        flex-direction: column;

        .btn-container{
            display: flex;
            margin-top: auto;
            
            button{
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
        }
    }
    
    @media (max-width: 720px){
        grid-template-columns: 1fr;
        margin-top: 5em;
        
        .container{
            order: 1;
            
            .btn-container{
                margin-top: 1em;
            }
        }
        
    }
    @media (max-width: 500px){
        margin-top: 2em;
    }
`