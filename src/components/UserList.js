import React, {useState} from 'react';


import "./UserList.css";

function UserList(props) {

const [userList, setUserList] = useState("Add a F.n Item please");

const awd9ui = () => {
  setUserList(props.info);
};

  return (
    <div className='container'>
      <li>
        {}
      </li>
    </div>
  );
}

export default UserList;