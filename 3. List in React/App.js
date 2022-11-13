import * as React from 'react';
const list = [{
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Napalit',
        num_comments: 2,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Cherry, De la Cruz',
        num_comments: 2,
        points: 2,
        objectID: 1,
    },
];
function App() { 
    return (
    <div>
    <h1>My Hacker Stories</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <ul>
        {list.map(function (item) {
            return <li key={item.objectID}>
            <span>
            <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </li>
            })}
            </ul>
    <hr />
    </div>
    ); 
}
export default App;
