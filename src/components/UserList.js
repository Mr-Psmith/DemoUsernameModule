import React, { useState } from "react";

import Card from "../UI/Card";
import "./UserList.css";
import "../App.css";

function UserList(props) {
  return (
    <Card>
      <ul>
        {props.info.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;