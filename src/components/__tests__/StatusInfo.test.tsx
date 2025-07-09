import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StatusInfo from '../StatusInfo';

describe('StatusInfo Component', () => {
  const mockStatusCodeMap = {
    'ok': 200,
    'created': 201,
    'not found': 404,
    'server error': 500
  };

  it('should render 2xx status information correctly', () => {
    render(
      <StatusInfo 
        category="2xx" 
        trafficLightStatus="green" 
        inputValue="200" 
        statusCodeMap={mockStatusCodeMap} 
      />
    );
    
    expect(screen.getByText('Status Information')).toBeInTheDocument();
    expect(screen.getByText('Category:')).toBeInTheDocument();
    expect(screen.getByText('2xx')).toBeInTheDocument();
    expect(screen.getByText('Code:')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText(/Success! The request was successful./)).toBeInTheDocument();
  });

  it('should render 4xx status information correctly', () => {
    render(
      <StatusInfo 
        category="4xx" 
        trafficLightStatus="red" 
        inputValue="not found" 
        statusCodeMap={mockStatusCodeMap} 
      />
    );
    
    expect(screen.getByText('Status Information')).toBeInTheDocument();
    expect(screen.getByText('Category:')).toBeInTheDocument();
    expect(screen.getByText('4xx')).toBeInTheDocument();
    expect(screen.getByText('Code:')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/Client Error! The request contains bad syntax or cannot be fulfilled./)).toBeInTheDocument();
  });

  it('should render invalid status information correctly', () => {
    render(
      <StatusInfo 
        category="invalid" 
        trafficLightStatus="orange" 
        inputValue="999" 
        statusCodeMap={mockStatusCodeMap} 
      />
    );
    
    expect(screen.getByText('Invalid Input')).toBeInTheDocument();
    expect(screen.getByText(/The provided status code or name is not valid./)).toBeInTheDocument();
    expect(screen.getByText(/Try entering a number between 100-599 or a valid status name./)).toBeInTheDocument();
  });

  it('should not render anything when trafficLightStatus is off', () => {
    const { container } = render(
      <StatusInfo 
        category="invalid" 
        trafficLightStatus="off" 
        inputValue="" 
        statusCodeMap={mockStatusCodeMap} 
      />
    );
    
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
