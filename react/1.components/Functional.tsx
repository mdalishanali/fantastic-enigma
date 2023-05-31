// Function Component
import React from 'react';

interface FunctionComponentProps {
  name: string;
}

const FunctionComponent: React.FC<FunctionComponentProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default FunctionComponent;
