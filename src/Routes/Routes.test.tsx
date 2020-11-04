import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Route from '.';

describe('Login component', () => {
  it('Should render Route component', () => {
    createComponent();

    expect(screen.getByTestId('routes')).toBeDefined();
  });
});

function createComponent() {
  render(<Route />);
}
