import useGameContext from "../../hooks/useGameContext"

const SelectionModal = () => {
    const { setGame } = useGameContext();
    return (
        <div>
            <h1>Seleccione una temática</h1>
            <button onClick={() => setGame('pokemon')}>Pokemon</button>
            <button onClick={() => setGame('rickAndMorty')}>Rick and Morty</button>
        </div>
    )
}

export default SelectionModal
