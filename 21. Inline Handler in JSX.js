import React from 'react';

const list = [
  {
    id: 'a',
    task: 'Learn React',
    isComplete: false,
  },
  {
    id: 'b',
    task: 'Learn GraphQL',
    isComplete: true,
  },
];

const App = () => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <span
            style={{
              textDecoration: item.isComplete
                ? 'line-through'
                : 'none',
            }}
          >
            {item.task}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default App;
