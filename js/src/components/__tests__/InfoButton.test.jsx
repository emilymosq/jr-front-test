import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InfoButton from '../InfoButton';

describe('InfoButton Component', () => {
  it('should render correctly', () => {
    const onClickMock = vi.fn();
    
    render(<InfoButton onClick={onClickMock} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Show status information');
    expect(button).toHaveClass('info-button');
  });

  it('should call onClick when clicked', () => {
    const onClickMock = vi.fn();
    
    render(<InfoButton onClick={onClickMock} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
