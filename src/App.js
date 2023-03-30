import React, {useState} from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

import "./App.css";

function App() {

  const [userInform, setUserInfo] = useState([]);/* if here there isn't an empty [] than it has a problem, which is a problem lol */

  const userInfo = (uName, uAge) => { /* we expect two parameters */
    setUserInfo((prevUsersList) => { /* we are taking the old list and appending a new element to it;;; We are useing a custum funct. here bec. this way when React does a state update we automatically get the newest one */
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString() }]; /* So here we take the previous state-the previous user list- and we extract it to a new array */
    });                                                   /* And here is how we can give it a semi-uniqe key/id */
  };


  return (
      <div /* className='container' */>
        <section className='section1'>
          <UserForm onSaveUserInfo={userInfo} />
        </section>
        <section className='section1'>
          <UserList info={userInform}/>
        </section>
      </div>
  );
}

export default App;
