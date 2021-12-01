import { StyledLoader } from './styles';
const Loader = () => {
    return (
        <StyledLoader>
            <div aria-label='loading' className='spinner'></div>
        </StyledLoader>
    )
}

export default Loader
