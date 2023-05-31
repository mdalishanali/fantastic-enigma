import React, { useState, useEffect, useCallback, useContext } from 'react';

// Create a context
const MyContext = React.createContext();

const MyComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    // Clean-up function for unmounting
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const value = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Context Value: {value}</p>
    </div>
  );
};

// Context provider component
const MyContextProvider: React.FC = ({ children }) => {
  const value = 'Hello from Context';

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default function App() {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
}
