import axios from 'axios';

import React from 'react';

function App() {
  const [guest, setGuest] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:8080/api/users')
      .then(res => res.data)
      .then(users => setGuest(users?.[0]))
      .finally(() => setIsLoading(false));
  }, []);
  
  if (isLoading) {
    return <p>loading...</p>
  }

  return <div>{JSON.stringify(guest)}</div>;

}

export default App;
