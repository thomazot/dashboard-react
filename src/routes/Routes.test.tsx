import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Route from '.';

describe('Login component', () => {
  it('Should render Route component', () => {
    const { container } = createComponent();

    expect(container).toBeDefined();
  });
});

function createComponent() {
  return render(<Route />);
}
