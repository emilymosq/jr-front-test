import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('should render the HttpStatusChecker component', () => {
    render(<App />);
    
    // Check for the title which is part of HttpStatusChecker
    expect(screen.getByText('HTTP Status Code Checker')).toBeInTheDocument();
    
    // Check for the container div
    expect(screen.getByRole('generic', { name: '' })).toHaveClass('container');
  });
});
