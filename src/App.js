import React, {useState} from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Card from './UI/Card';

import "./App.css";

function App(props) {

  const [userInform, setUserInfo] = useState("");

  const userInfo = (enteredInfo) => {
    setUserInfo((userInforms) => {
      return [enteredInfo, ...userInforms];
    });
  };


  return (
    <Card>
      <div className='container'>
        <section className='section1'>
          <UserForm onSaveUserInfo={userInfo} />
        </section>
        <section className='section1'>
          <UserList info={userInform}/>
        </section>
      </div>
    </Card>
  );
}

export default App;
