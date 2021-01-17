import { render } from '@testing-library/react';
import Home from './';

describe('<Home /> component page', () => {
  it('Should render componente', () => {
    const { container } = createComponent();
    expect(container.firstChild).toBeInTheDocument();
  });
});

function createComponent() {
  return render(<Home />);
}
