import React from 'react';

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

const Button = () => {
  const handleClick = () => console.log('Clicked!');

  return (
    <button type="button" onClick={handleClick}>
      Click me!
    </button>
  );
};

export default App;