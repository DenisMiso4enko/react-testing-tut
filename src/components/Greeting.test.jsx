import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Greeting', () => {
  it('render default greeting', () => {
    render(<Greeting />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('render with a name', () => {
    render(<Greeting name="Denis" />);
    expect(screen.getByText('Hello, Denis!')).toBeInTheDocument();
  });
});
