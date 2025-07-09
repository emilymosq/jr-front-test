import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InputSection from '../InputSection';

describe('InputSection Component', () => {
  it('should render input and button correctly', () => {
    const onInputChangeMock = vi.fn();
    const onCheckStatusMock = vi.fn();
    
    render(
      <InputSection 
        inputValue="200" 
        onInputChange={onInputChangeMock} 
        onCheckStatus={onCheckStatusMock} 
      />
    );
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /check/i });
    
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('200');
    expect(button).toBeInTheDocument();
  });

  it('should call onInputChange when input value changes', () => {
    const onInputChangeMock = vi.fn();
    const onCheckStatusMock = vi.fn();
    
    render(
      <InputSection 
        inputValue="" 
        onInputChange={onInputChangeMock} 
        onCheckStatus={onCheckStatusMock} 
      />
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '404' } });
    
    expect(onInputChangeMock).toHaveBeenCalledWith('404');
  });

  it('should call onCheckStatus when button is clicked', () => {
    const onInputChangeMock = vi.fn();
    const onCheckStatusMock = vi.fn();
    
    render(
      <InputSection 
        inputValue="404" 
        onInputChange={onInputChangeMock} 
        onCheckStatus={onCheckStatusMock} 
      />
    );
    
    const button = screen.getByRole('button', { name: /check/i });
    fireEvent.click(button);
    
    expect(onCheckStatusMock).toHaveBeenCalledTimes(1);
  });

  it('should call onCheckStatus when Enter key is pressed in input', () => {
    const onInputChangeMock = vi.fn();
    const onCheckStatusMock = vi.fn();
    
    render(
      <InputSection 
        inputValue="404" 
        onInputChange={onInputChangeMock} 
        onCheckStatus={onCheckStatusMock} 
      />
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(onCheckStatusMock).toHaveBeenCalledTimes(1);
  });

  it('should not call onCheckStatus when a key other than Enter is pressed', () => {
    const onInputChangeMock = vi.fn();
    const onCheckStatusMock = vi.fn();
    
    render(
      <InputSection 
        inputValue="404" 
        onInputChange={onInputChangeMock} 
        onCheckStatus={onCheckStatusMock} 
      />
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'A', code: 'KeyA' });
    
    expect(onCheckStatusMock).not.toHaveBeenCalled();
  });
});
