import { render } from "./test/utils"
import App from './App'

test('should render App', () => {
    const { getByRole, queryByRole, getAllByRole } = render(<App />)
    const soundButtonOff = getByRole('button', { name: 'turn sound off' });
    const soundButtonOn = queryByRole('button', { name: 'turn sound on' });
    expect(soundButtonOff).toBeVisible();
    expect(soundButtonOn).not.toBeInTheDocument();
    const images = getAllByRole('img');
    expect(images).toHaveLength(3);
});
