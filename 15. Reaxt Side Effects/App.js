import * as React from 'react';

const App = () => {
  const stories = [
    {
      title: 'BRIGHT',
      url: 'https://reactjs.org/',
      author: 'Cherry Napalit ',
      num_comments: 2,
      points: 4,
      objectID: 0,
    },
    {
      title: 'WIN',
      url: 'https://redux.js.org/',
      author: 'Napalit, Cherry ',
      num_comments: 2,
      points: 2,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'Pegasus'
  );

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

    const searchedStories = stories.filter((story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <h1>Hi Everyone!</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch}
    />
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

export default App;

