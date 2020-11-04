import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '.';

describe('Login component', () => {
  it('Should render Login component', () => {
    createComponent();

    const username = screen.getByRole('textbox', { name: /e-mail/i });
    expect(username).toBeInTheDocument();

    const password = screen.getByLabelText(/senha/i);
    expect(password).toBeInTheDocument();
  });
});

function createComponent() {
  render(<Login />);
}
