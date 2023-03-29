import React, {useState} from 'react';

import Card from '../UI/Card';
import "./UserList.css";
import "../App.css"

function UserList(props) {

/* const [userList, setUserList] = useState("Add a F.n Item please"); */

/* const awd9ui = () => {
  setUserList();
};
 */
  return (
    <Card>
      <ul>
          {props.info.map(user => 
          <li> {user.name} ({user.age} years old) </li>
          )}
      </ul>
    </Card>
  );
}

export default UserList;