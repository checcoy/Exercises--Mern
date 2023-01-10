import React from 'react';

import { getUsers, createUser, updateUser, deleteUser } from './api';

const App = () => {
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    const doGetUsers = async () => {
      const result = await getUsers();
      setUsers(result);
    };

    doGetUsers();
  }, []);

  return <div> WOW BiPSU </div>;
};

export default App;