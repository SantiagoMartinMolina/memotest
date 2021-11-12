import styled from "styled-components";

export const StyledSelectionModal = styled.div`
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
    background-color: #fff;
    display: flex;
    max-width: 1000px;
    width: 90%;
    overflow: hidden;
    position: relative;

    .content{
       padding: 1.5em;
       width: 50%;
       display: flex;
       flex-direction: column;

       p{
           margin-bottom: 1em;
           font-size: clamp(0.75rem, 2vw, 1.5rem);
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
           /* width: 80%; */
           max-height: calc(150px + 15vw);
           margin: auto 0;
           cursor: pointer;
           transition: filter 200ms ease;
           user-select: none;

           &:active{
               transform: translateY(10px);
               mix-blend-mode: overlay;
            }
            &:hover{
                filter: drop-shadow(0 0 30px white) drop-shadow(0 0 30px white) ;
           }
       }

       .links{
            display: flex;
            list-style: none;
            justify-content: flex-end;  
            flex: 1;
            align-items: center;

            a{
                margin-left: 1em;
                color: white;
                text-decoration: none;
                display: inline-block;
                font-size: 1.2em;
                i{
                    font-size: 1.4em;
                }  
                
                &:hover{
                    color: var(--primary);
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
        font-size: clamp(1.5rem, 5vw, 7rem);
        color: var(--primary);
        letter-spacing: 0.1em;
    }

    footer{
        display: flex;
        align-items: center;

        p{
           font-size: 1em;
       }
    }

	@media (max-width: 800px) {
        flex-direction: column; 
        
        .content, .img-container{
            width: 100%;
        }

        .img-container{
            clip-path: none;
            img{
                /* display: none; */
                max-height: 50px;
                position: absolute;
                top: 1.5em;
                right: 3.5em;

                &:hover{
                    filter: none;
                }
                
                &:active{
                    transform: translateY(5px);
                    mix-blend-mode: normal;
                }
            }
        }

        .card-container{
            gap: 1em;
        }

        .img-container{
            button{
                .fas{
                    position: absolute;
                    top: 3em;
                    right: 1.5em;
                    color: #aaa;
                    font-size: 1.1em;
                }
            }
        }

    }

	@media (max-width: 500px) {
        .card-container{
            grid-template-columns: 1fr;
        }
    }

	@media (max-width: 400px) {
        footer{
            p{
                font-size: 0.8em;
            }
        }

        .img-container{
            .links{
                a{
                    i{
                        font-size: 1.2em;
                    }
                }
            }
        }
    }


    
`