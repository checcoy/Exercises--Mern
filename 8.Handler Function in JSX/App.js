import * as React from 'react';
const list = [ {
    title: 'React',
    author: 'Cherry',
    num_comments: 5,
    points: 4,
},
{
    title: 'Redux',
    author: 'Cherry, Napalit',
    num_comments: 6,
    points: 3,
},
];
const App = () => {
    return (
    <div>
        <h1>Hello STCS!</h1>
    </div>
    );
};
const List = () => {
    return (
    <ul>
        {list.map((item) => { return (
        <li key={item.objectID}>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </li>
            );
        })}
        <div>
            <Search />
            <hr />
            <List />
            </div>
    </ul>
    );
};
const Search = () => {
    const handleChange = (event) => {
        console.log(event.target.value);
    };
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange} />
        </div>
    );
};
export default App;
