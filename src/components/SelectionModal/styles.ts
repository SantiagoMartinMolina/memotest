import styled from "styled-components";

export const StyledSelectionModal = styled.div`
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
    background-color: #fff;
    display: flex;
    max-width: 1000px;
    width: 90%;
    overflow: hidden;

    .content{
       padding: 1.5em;
       width: 50%;
       display: flex;
       flex-direction: column;

       p{
           margin-top: auto;
           margin-bottom: 1em;
           font-size: clamp(0.75rem, 2vw, 1.5rem);

       }

       span{
           margin-top: 1em;
           text-align: center;
           font-size: 1em;
       }
    }

   .img-container{
       width: 50%;
       background-color: #ffc5bc;
       clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       padding: 1.5em;

       img{
           align-self: flex-end;
           width: 80%;
           margin: auto 0;
       }

       .links{
            display: flex;
            list-style: none;
            justify-content: flex-end;  
            align-items: center;
            margin-top: 1em;

            a{
                margin-left: 1em;
                color: white;
                text-decoration: none;
                display: inline-block;
                font-size: 1.2em;
                i{
                    font-size: 1.4em;
                }               
            }
       }
   }

   .card-container{
       display: grid;
       grid-template-columns: repeat(2, minmax(2em, 1fr));
       gap: 2em;
   }

    h1{
        font-family: 'Irish Grover', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
        font-size: clamp(1rem, 5vw, 7rem);
        color: var(--title-color);
        letter-spacing: 4px;
    }

	@media (max-width: 550px) {

        .content, .img-container{
            padding: 1em;
        }

        .content{
            span{
                font-size: 0.5em;
            }
        }

        .img-container{
            .links{
                a{
                    font-size: 0.7em;
                }
            }
        }

    }

    
`