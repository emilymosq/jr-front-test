import React from 'react';

type StatusCodeCategory = '2xx' | '3xx' | '4xx' | '5xx' | 'invalid';

interface StatusInfoProps {
  category: StatusCodeCategory;
  trafficLightStatus: 'green' | 'orange' | 'red' | 'off';
  inputValue: string;
  statusCodeMap: Record<string, number>;
  isUrlError?: boolean;
}

const StatusInfo: React.FC<StatusInfoProps> = ({ 
  category, 
  trafficLightStatus, 
  inputValue, 
  statusCodeMap, isUrlError = false
}) => {
  return (
    <div className="status-info" >
      {category !== 'invalid' ? (
        <div className="status-card">
          <h3>Status Information</h3>
          <p>
            <strong>Category:</strong> <span className={`status-${category}`}>{category}</span>
          </p>
          {inputValue && /^\d+$/.test(inputValue) && (
            <p><strong>Code:</strong> <span className={`status-${category}`}>{inputValue}</span></p>
          )}
          {inputValue && statusCodeMap[inputValue.toLowerCase()] && (
            <p><strong>Code:</strong> <span className={`status-${category}`}>{statusCodeMap[inputValue.toLowerCase()]}</span></p>
          )}
          {category === '2xx' && <p className="status-message">✓ Success! The request was successful.</p>}
          {category === '3xx' && <p className="status-message">↪ Redirection! Further action is needed.</p>}
          {category === '4xx' && <p className="status-message">✗ Client Error! The request contains bad syntax or cannot be fulfilled.</p>}
          {category === '5xx' && <p className="status-message">✗ Server Error! The server failed to fulfill a valid request.</p>}
        </div>
      ) : trafficLightStatus !== 'off' ? (
        <div className="status-card error">
          <h3>Invalid Input</h3>
          {/*He cambiado un poco esta parte, ya que al momento de comprobar la url, puede haber problemas con algunas
            de las urls por una politica del cors, por lo tanto, he agregado un mensaje distinto aclarando
            que no es un error del usuario, sino que es por restriccion del navegador. */}
          {isUrlError ? (
              <p>
                The input looks like a valid URL, but we couldn’t get a response.
                This could be due to CORS restrictions or the server being unreachable.
              </p>
          ) : (
              <>
                <p>The provided status code or name is not valid.</p>
                <p>Try entering a number between 100–599 or a valid status name.</p>
              </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default StatusInfo;
