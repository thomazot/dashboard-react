import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NotFound from './';

describe('<NotFound /> Component Page', () => {
  it('Should render component', () => {
    createComponent();
    const text404 = screen.getByText(/404/i);
    expect(text404).toBeInTheDocument();
  });
});

function createComponent() {
  return render(<NotFound />);
}
