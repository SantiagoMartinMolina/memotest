import { StyledSelectionModal } from './styles';
import ThemeCard from '../ThemeCard';
import PokemonEvolutionImg from '../PokemonEvolutionImg/index';
import type { FC } from 'react';

const SelectionModal: FC = () => {

    return (
        <StyledSelectionModal>
            <div className='content'>
                <h1>Memotest</h1>
                <p>Select a topic:</p>
                <div className='card-container'>
                    <ThemeCard game='pokemon' />
                    <ThemeCard game='rickAndMorty' />
                </div>
            </div>
            <div className='img-container'>
                <PokemonEvolutionImg />
                <footer>
                    <p>Santiago Molina - 2021</p>

                    <ul className='links'>
                        <li><a aria-label='visit my twitter' href='https://twitter.com/santidev7' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter-square"></i></a></li>
                        <li><a aria-label='visit my github' href='https://github.com/SantiagoMartinMolina' target='_blank' rel='noopener noreferrer'><i className="fab fa-github-square"></i></a></li>
                        <li><a aria-label='visit my linkedin' href='https://www.linkedin.com/in/santiago-molina-dev/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </footer>
            </div>
        </StyledSelectionModal>
    )
}

export default SelectionModal
