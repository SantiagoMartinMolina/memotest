import { render } from '../../test/utils';
import ThemeCard from '../ThemeCard/index';
test('should render a ThemeCard component', () => {
    const { getByRole, getByText, getByAltText } = render(<ThemeCard game='pokemon' />);
    const span = getByText(/play/i);
    const button = getByRole('button');
    const img = getByAltText(/pokemon/i)
    expect(span).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(img).toBeInTheDocument();
})
