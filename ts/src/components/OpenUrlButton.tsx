import React from 'react';

interface OpenUrlButtonProps{
    url: string;
}

const OpenUrlButton: React.FC<OpenUrlButtonProps> = ({url}) => {
    const handleClick = () => {
        window.open(url, '_blank');
    }

    return (
        <button
            onClick={handleClick}
            className="open-url-button"
        >
            Open URL in new tab
        </button>
    )
}

export default OpenUrlButton;