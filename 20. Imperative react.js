import React, { useState } from 'react';

const App = () => {
  const onSubmit = username => console.log(username);

  return <Form onSubmit={onSubmit} />;
};

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <form
      onSubmit={event => {
        onSubmit(username);

        // prevents browser from reloading
        // which is the native browser behavior
        // for a form submit
        event.preventDefault();
      }}
    >
      <label>
        Your name:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
};

export default App;