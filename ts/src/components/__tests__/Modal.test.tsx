import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Modal from '../Modal';

describe('Modal Component', () => {
  it('should not render when isOpen is false', () => {
    const onCloseMock = vi.fn();
    
    render(
      <Modal isOpen={false} onClose={onCloseMock}>
        <div data-testid="modal-content">Test Content</div>
      </Modal>
    );
    
    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument();
  });

  it('should render children when isOpen is true', () => {
    const onCloseMock = vi.fn();
    
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div data-testid="modal-content">Test Content</div>
      </Modal>
    );
    
    // This test will fail because the modal doesn't properly display its children
    // The applicant will need to fix the Modal component
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    const onCloseMock = vi.fn();
    
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Test Content</div>
      </Modal>
    );
    
    const closeButton = screen.getByRole('button', { name: /✕/i });
    fireEvent.click(closeButton);
    
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
