import React from 'react';

interface HistoryButtonProps {
    onClick: () => void;
    shouldMoveUp?: boolean;
}

const HistoryButton: React.FC<HistoryButtonProps> = ({onClick, shouldMoveUp}) => {
    return (
        <button
            className={`history-button ${shouldMoveUp ? 'move-up' : ''}`}
            onClick={onClick}
        >
            <img src="/history.png" alt="history" className={'image'}/>
        </button>
    )
}

export default HistoryButton;