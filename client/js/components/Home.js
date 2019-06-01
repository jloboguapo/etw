import React, { useState } from 'react';

const Home = props => {
  const [input, setInput] = useState(1);

  return (
    <div className="etw-home-container">
      How many times I have clicked {input}
      <button
        className="etw-home-button"
        onClick={() => {
          setInput(input + 1);
        }}
      >
        Increment
      </button>
      <button
        className="etw-home-button"
        onClick={() => {
          setInput(input - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Home;
