import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import HttpStatusChecker from '../HttpStatusChecker';

// Mock the window.innerWidth to test responsive behavior
const mockWindowInnerWidth = (width) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width
  });
  window.dispatchEvent(new Event('resize'));
};

describe('HttpStatusChecker Component', () => {
  beforeEach(() => {
    // Reset to desktop view by default
    mockWindowInnerWidth(1024);
  });

  it('should render all components correctly', () => {
    render(<HttpStatusChecker />);
    
    expect(screen.getByText('HTTP Status Code Checker')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /check/i })).toBeInTheDocument();
    expect(screen.getByRole('generic', { name: '' })).toBeInTheDocument(); // Traffic light
  });

  it('should update traffic light when checking a valid status code', () => {
    render(<HttpStatusChecker />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /check/i });
    
    fireEvent.change(input, { target: { value: '200' } });
    fireEvent.click(button);
    
    const lights = screen.getAllByRole('generic');
    const greenLight = lights.find(light => light.classList.contains('green') && light.classList.contains('active'));
    
    expect(greenLight).toBeInTheDocument();
    expect(screen.getByText(/Success!/)).toBeInTheDocument();
  });

  it('should update traffic light when checking an error status code', () => {
    render(<HttpStatusChecker />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /check/i });
    
    fireEvent.change(input, { target: { value: '404' } });
    fireEvent.click(button);
    
    const lights = screen.getAllByRole('generic');
    const redLight = lights.find(light => light.classList.contains('red') && light.classList.contains('active'));
    
    expect(redLight).toBeInTheDocument();
    expect(screen.getByText(/Client Error!/)).toBeInTheDocument();
  });

  it('should show info button on mobile view when status is checked', () => {
    // Set to mobile view
    mockWindowInnerWidth(480);
    
    render(<HttpStatusChecker />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /check/i });
    
    // Initially, info button should not be visible
    expect(screen.queryByRole('button', { name: /show status information/i })).not.toBeInTheDocument();
    
    // Check a status code
    fireEvent.change(input, { target: { value: '200' } });
    fireEvent.click(button);
    
    // Info button should now be visible
    expect(screen.getByRole('button', { name: /show status information/i })).toBeInTheDocument();
  });

  it('should open modal when info button is clicked on mobile view', () => {
    // Set to mobile view
    mockWindowInnerWidth(480);
    
    render(<HttpStatusChecker />);
    
    const input = screen.getByRole('textbox');
    const checkButton = screen.getByRole('button', { name: /check/i });
    
    // Check a status code
    fireEvent.change(input, { target: { value: '200' } });
    fireEvent.click(checkButton);
    
    // Click info button
    const infoButton = screen.getByRole('button', { name: /show status information/i });
    fireEvent.click(infoButton);
    
    // Modal should be open with status info
    // This test will fail because the modal doesn't properly display the StatusInfo component
    // The applicant will need to fix this issue
    expect(screen.getByText('Status Information')).toBeInTheDocument();
    expect(screen.getByText('2xx')).toBeInTheDocument();
  });

  it('should close modal when close button is clicked', () => {
    // Set to mobile view
    mockWindowInnerWidth(480);
    
    render(<HttpStatusChecker />);
    
    const input = screen.getByRole('textbox');
    const checkButton = screen.getByRole('button', { name: /check/i });
    
    // Check a status code
    fireEvent.change(input, { target: { value: '200' } });
    fireEvent.click(checkButton);
    
    // Click info button
    const infoButton = screen.getByRole('button', { name: /show status information/i });
    fireEvent.click(infoButton);
    
    // Click close button
    const closeButton = screen.getByRole('button', { name: /✕/i });
    fireEvent.click(closeButton);
    
    // Modal should be closed
    expect(screen.queryByText('Status Information')).not.toBeInTheDocument();
  });
});
