import React, { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <h1>{isVisible ? 'Hello, World!' : ''}</h1>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
    </div>
  );
}

export default App;
