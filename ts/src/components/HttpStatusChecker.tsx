import React, { useState, useEffect } from 'react';
import Title from './Title';
import InputSection from './InputSection';
import TrafficLight from './TrafficLight';
import StatusInfo from './StatusInfo';
import InfoButton from './InfoButton';
import Modal from './Modal';
import { validarURL, fetchStatusCode } from '../utils/urlUtils.tsx';

type TrafficLightStatus = 'green' | 'orange' | 'red' | 'off';
type StatusCodeCategory = '2xx' | '3xx' | '4xx' | '5xx' | 'invalid';

const statusCodeMap: Record<string, number> = {
  // 2xx - Success
  'ok': 200,
  'created': 201,
  'accepted': 202,
  'non-authoritative information': 203,
  'no content': 204,
  'reset content': 205,
  'partial content': 206,

  // 3xx - Redirection
  'multiple choices': 300,
  'moved permanently': 301,
  'found': 302,
  'see other': 303,
  'not modified': 304,
  'temporary redirect': 307,
  'permanent redirect': 308,

  // 4xx - Client Errors
  'bad request': 400,
  'unauthorized': 401,
  'payment required': 402,
  'forbidden': 403,
  'not found': 404,
  'method not allowed': 405,
  'not acceptable': 406,
  'request timeout': 408,
  'conflict': 409,
  'gone': 410,
  'internal error': 500,

  // 5xx - Server Errors
  'internal server error': 500,
  'not implemented': 501,
  'bad gateway': 502,
  'service unavailable': 503,
  'gateway timeout': 504,
  'http version not supported': 505
};


const HttpStatusChecker: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [trafficLightStatus, setTrafficLightStatus] = useState<TrafficLightStatus>('off');
  const [statusCategory, setStatusCategory] = useState<StatusCodeCategory>('invalid');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [errorUrlMessage, setErrorUrlMessage] = useState('');

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const checkStatusCode = async () => {
    // Check if input is empty
    if (!inputValue.trim()) {
      setTrafficLightStatus('off');
      setStatusCategory('invalid');
      setErrorUrlMessage('');
      return;
    }

    let statusCode: number | 'cors' | null = null;

    // Check if input is a number
    if (/^\d+$/.test(inputValue)) {
      statusCode = parseInt(inputValue, 10);
    } else {
      // Check if input is a status text
      const normalizedInput = inputValue.toLowerCase().trim();
      statusCode = statusCodeMap[normalizedInput] || null;

      if (statusCode === null && validarURL(inputValue)) {
        /*
        * Si no se encuentra un status code por num o por nombre, verificamos que el input es una url valida.
        * En ese caso, se hace una peticion head a la url para intentar obtener el status. Si la peticion falla
        * por politica de cors (lo cual lo manejamos desde fetchStatusCode) se mostrara un mensaje explicando dicho error.
        */
        const result = await fetchStatusCode(inputValue);
        if (result === 'cors') {
          setErrorUrlMessage('No se puede acceder a esta URL por restricciones de CORS.');
          setTrafficLightStatus('orange');
          setStatusCategory('invalid');
          return;
        }
        statusCode = result;
      }
    }

    // Determine the status category
    if (statusCode !== null) {
      if (statusCode >= 200 && statusCode < 300) {
        setTrafficLightStatus('green');
        setStatusCategory('2xx');
      } else if (statusCode >= 300 && statusCode < 400) {
        setTrafficLightStatus('green'); // 3xx are also considered successful
        setStatusCategory('3xx');
      } else if (statusCode >= 400 && statusCode < 500) {
        setTrafficLightStatus('red');
        setStatusCategory('4xx');
      } else if (statusCode >= 500 && statusCode < 600) {
        setTrafficLightStatus('red');
        setStatusCategory('5xx');
      } else {
        setTrafficLightStatus('orange');
        setStatusCategory('invalid');
      }
    } else {
      setTrafficLightStatus('orange');
      setStatusCategory('invalid');
    }
  };

  return (
      <div className="http-status-checker">
        <Title text="HTTP Status Code Checker" />

        <InputSection
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onCheckStatus={checkStatusCode}
        />

        <TrafficLight status={trafficLightStatus} />

        {/* Show StatusInfo directly on desktop, InfoButton on mobile */}
        {!isMobile ? (
            <StatusInfo
                category={statusCategory}
                trafficLightStatus={trafficLightStatus}
                inputValue={inputValue}
                statusCodeMap={statusCodeMap}
                isUrlError={!!errorUrlMessage}
            />
        ) : (
            <>
              {trafficLightStatus !== 'off' && (
                  <InfoButton onClick={() => setIsModalOpen(true)} />
              )}

              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <StatusInfo
                    category={statusCategory}
                    trafficLightStatus={trafficLightStatus}
                    inputValue={inputValue}
                    statusCodeMap={statusCodeMap}
                    isUrlError={!!errorUrlMessage}
                />
              </Modal>
            </>
        )}
      </div>
  );
};

export default HttpStatusChecker;
