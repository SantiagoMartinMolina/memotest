import { render } from "../../test/utils";
import SelectionModal from "./index";

test('should render its children', () => {
    const { getByRole, getByText, getAllByRole } = render(<SelectionModal />);
    const title = getByRole('heading', { name: /memotest/i });
    const subtitle = getByText(/selecciona una temática:/i);
    const images = getAllByRole('img');
    const links = getAllByRole('link');
    expect(title).toBeVisible();
    expect(subtitle).toBeVisible();
    expect(images).toHaveLength(3);
    expect(links).toHaveLength(3);

})
