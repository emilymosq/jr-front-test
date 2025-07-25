import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="title">{text}</h1>;
};

export default Title;
