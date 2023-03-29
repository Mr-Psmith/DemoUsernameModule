import React, {useState} from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

import "./App.css";

function App() {

  const [userInform, setUserInfo] = useState([]);/* if here there isn't an empty [] than it has a problem, which is a problem lol */

  const userInfo = (uName, uAge) => { /* we expect two arguments */
    setUserInfo((userInforms) => { /* we are taking the old list and appending a new element to it */
      return [...userInforms, {name: uName, age: uAge}];
    });
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
