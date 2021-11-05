import useGameContext from "../../hooks/useGameContext";
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
            </div>
        </StyledSelectionModal>
    )
}

export default SelectionModal
