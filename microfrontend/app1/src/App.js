import React from 'react';

const App = ({user}) => {
  console.log(user)
  return (
    <div style={{ padding: '20px', border: '2px solid green' }}>
      <h2>Name prop get from Host. Hello {user.name}</h2>
    </div>
  );
};

export default App;
