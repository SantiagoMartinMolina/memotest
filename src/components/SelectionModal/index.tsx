import { StyledSelectionModal } from './styles';
import Charmander from '../../images/charmander.png';
import ThemeCard from "../ThemeCard";

const SelectionModal = () => {
    return (
        <StyledSelectionModal>
            <div className='content'>
                <h1>Memotest</h1>
                <p>Selecciona una temática:</p>
                <div className='card-container'>
                    <ThemeCard game='pokemon' />
                    <ThemeCard game='rickAndMorty' />
                </div>
            </div>
            <div className='img-container'>
                <img src={Charmander} alt="charmander" />
                <footer>
                    <p>Santiago Molina - 2021</p>

                    <ul className='links'>
                        <li><a href='https://twitter.com/santidev7' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href='https://github.com/SantiagoMartinMolina' target='_blank' rel='noopener noreferrer'><i className="fab fa-github-square"></i></a></li>
                        <li><a href='https://www.linkedin.com/in/santiago-molina-dev/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </footer>
            </div>
        </StyledSelectionModal>
    )
}

export default SelectionModal
