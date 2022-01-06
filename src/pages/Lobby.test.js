import React from 'react';
import { render, screen } from '@testing-library/react';
import Lobby from './Lobby';

describe('Lobby', () => {
  test('renders Lobby component', () => {
    render(<Lobby />);
    expect(screen.findByText('Welcome'));
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
    screen.debug();
  });
});
