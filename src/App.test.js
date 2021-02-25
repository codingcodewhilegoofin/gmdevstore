/**
 *  Unit testing: 
 * 
 *  
 */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about', () => {
  render(<App />);
  const linkElement = screen.getByText(/click-me/i);
  expect(linkElement).toBeInTheDocument();
});
