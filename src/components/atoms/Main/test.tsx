import renderer from 'react-test-renderer';

import { screen } from '@testing-library/react-native';

import { renderWithTheme } from 'utils/tests/helpers';

import { Main } from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />);

    const container = renderer.create(<Main />).toJSON();

    expect(screen.getByText(/main/i)).toBeDefined();

    expect(container).toMatchSnapshot();
  });
});
