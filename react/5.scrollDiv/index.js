import React, { useRef } from 'react';

const ScrollComponent = () => {
  const divRef = useRef(null);

  const scrollToPosition = () => {
    if (divRef.current) {
      divRef.current.scrollTop = 300; 
    }
  };

  return (
    <div>
      <button onClick={scrollToPosition}>Scroll to Position</button>
      <div ref={divRef} style={{ height: '200px', overflow: 'scroll' }}>
        {/* Content */}
      </div>
    </div>
  );
};

export default ScrollComponent;
