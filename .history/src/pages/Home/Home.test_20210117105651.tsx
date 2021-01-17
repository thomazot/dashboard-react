import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
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
