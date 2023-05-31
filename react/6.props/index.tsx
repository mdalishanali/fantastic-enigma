// ParentComponent.tsx
import React from 'react';

const ParentComponent: React.FC = () => {
  const data = 'Hello from Parent';

  return <ChildComponent message={data} />;
};

export default ParentComponent;



// ChildComponent.tsx

interface ChildComponentProps {
  message: string;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ message }) => {
  return <p>{message}</p>;
};

