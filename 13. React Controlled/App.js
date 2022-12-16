import * as React from 'react';
const App = () => {
    const stories = [
        {
        title: 'Freedom of Wall',
        author: 'Cherry',
        num_comments: 3,
        points: 4,
        objectID: 0,
        },
        {
        title: 'Justice',
        author: 'Cherry.',
        num_comments: 2,
        points: 5,
        objectID: 1,
        },
    ];

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <h1>WOW BipSU!</h1>
            <Search search={searchTerm} onSearch={handleSearch} />
    
            <hr />
            <List list={stories} />
            </div>
    );
};
const Search = (props) => (
<div>
    <label htmlFor="search">Search: </label>
    <input
    id="search"
    type="text"
    value={props.search}
    onChange={props.onSearch}
    />
</div>
);

const List = (props) => (
    <ul>
    {props.list.map((item) => (
    <Item key={item.objectID} item={item} />
    ))}
    </ul>
);
const Item = (props) => (
    <li>
    <span>
    <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
    </li>
);
export default App;

