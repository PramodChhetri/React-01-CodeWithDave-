import React, { useState } from 'react';

const Content = () => {

  const [name, setName] = useState('Pramod');

  const handleNameChange = () => {
    const names = ['Bob', 'Kelvin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int])
  };

  const handleClick = (name) => {
    alert(`${name} clicked`);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={() => handleClick('Dave')}>Click it</button>
      <button onClick={handleNameChange}>Name Change</button>
    </main>
  );
};

export default Content;
