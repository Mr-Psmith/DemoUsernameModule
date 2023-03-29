import React, { useState } from "react";
import "./UserForm.css";
import Card from "../UI/Card";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
        return;
    } 
    if (+age < 1) {
        return;
    }
    /* if (userName.trim().length < 2) { isnt working, why???
        return;
    } */
    props.onSaveUserInfo(userName, age);
    /* console.log(userName, age); */
    setAge("");
    setUserName("");

  };

  const userNameInputHandler = (event) => {
    /* if (event.target.value.trim().length > 2) { */
        setUserName(event.target.value);
    /* } else {
        return;
    } */
  };
  const ageInputHandler = (event) => {
    /* if (event.target.value > 7) { */
        setAge(event.target.value);
    /* } else {
        return;
    } */
};



  return (
    <Card>
      <form className="form-control" onSubmit={formSubmitHandler}>
        <label htmlFor="username" >Username</label>
        <input value={userName} id="username" type="text" onChange={userNameInputHandler}></input>
        <label htmlFor="userage">Age (Years)</label>
        <input value={age} id="userage" type="number" min="1" onChange={ageInputHandler}></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default UserForm;