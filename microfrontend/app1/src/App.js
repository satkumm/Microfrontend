import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../react-shell/src/store';
import ArchivalRequestForm from './components/Archival/ArchivalRequestForm'
import ArchivalList from './components/Archival/ArchivalList'

const App = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    // <div style={{ padding: '20px', border: '2px solid green' }}>
    //   <h2>Child/Remote APP</h2>
    //   <h3>Name prop get from Parent APP. {props.user.name}</h3>
    //   <h3>{user.name}</h3>
    //   <button onClick={() => dispatch(setUser('Updated from Remote'))}>
    //     Change User
    //   </button>
    // </div>
    // <ArchivalRequestForm />
    <ArchivalList />
  );
};

export default App;
