import React, {useState} from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm'
import UserList from './components/UserList/UserList'
import {UserContext} from './components/UserContext'


function App() {
  const [users, setUsers] = useState([
    {id: '1', name: 'Binh', email: 'binh.buithe@pycogroup.com', active: false}
  ]); 

  return (
    <UserContext.Provider value={[users, setUsers]}>
      <div className="App">
        <UserForm/>
        <UserList/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
