import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TrafficLight from '../TrafficLight';

describe('TrafficLight Component', () => {
  it('should render with red light active when status is red', () => {
    render(<TrafficLight status="red" />);
    
    const lights = screen.getAllByRole('generic');
    const redLight = lights.find(light => light.classList.contains('red'));
    
    expect(redLight).toHaveClass('active');
    expect(lights.find(light => light.classList.contains('orange'))).not.toHaveClass('active');
    expect(lights.find(light => light.classList.contains('green'))).not.toHaveClass('active');
  });

  it('should render with orange light active when status is orange', () => {
    render(<TrafficLight status="orange" />);
    
    const lights = screen.getAllByRole('generic');
    const orangeLight = lights.find(light => light.classList.contains('orange'));
    
    expect(orangeLight).toHaveClass('active');
    expect(lights.find(light => light.classList.contains('red'))).not.toHaveClass('active');
    expect(lights.find(light => light.classList.contains('green'))).not.toHaveClass('active');
  });

  it('should render with green light active when status is green', () => {
    render(<TrafficLight status="green" />);
    
    const lights = screen.getAllByRole('generic');
    const greenLight = lights.find(light => light.classList.contains('green'));
    
    expect(greenLight).toHaveClass('active');
    expect(lights.find(light => light.classList.contains('red'))).not.toHaveClass('active');
    expect(lights.find(light => light.classList.contains('orange'))).not.toHaveClass('active');
  });

  it('should render with no lights active when status is off', () => {
    render(<TrafficLight status="off" />);
    
    const lights = screen.getAllByRole('generic');
    
    expect(lights.find(light => light.classList.contains('red'))).not.toHaveClass('active');
    expect(lights.find(light => light.classList.contains('orange'))).not.toHaveClass('active');
    expect(lights.find(light => light.classList.contains('green'))).not.toHaveClass('active');
  });
});
