import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Title from '../Title';

describe('Title Component', () => {
  it('should render the title text correctly', () => {
    render(<Title text="Test Title" />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Test Title');
  });

  it('should have the correct CSS class', () => {
    const { container } = render(<Title text="Test Title" />);
    
    expect(container.firstChild).toHaveClass('title');
  });
});
