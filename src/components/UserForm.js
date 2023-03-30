import React, { useState } from "react";
import "./UserForm.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      /*  setError(<ErrorModal modalTitle="Soon to be dynamic" modalMessage="its not hardcoded at all" />); good as well*/
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty values).",
      });
      return;
    }
    if (+age < 14) {
      setError({
        title: "Invalid age",
        message: "Please Fuck off(enter a valid age, no underagers here (>14))",
      });
      return; /* If we leave this out than this will still print an empty message */
    }
    /* if (userName.trim().length < 2) { isnt working, why???
        return;
    } */
    props.onSaveUserInfo(userName, age);
    setAge("");
    setUserName("");
  };

  const modalCloseHandler = () => { 
    setError(""); /* or null, or anything false, or falsy value */
  };

  const userNameInputHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {error && ( /* If error is a thing, - so it is true - this will render otherwise nothing */
        <ErrorModal 
          closeModalHandler={modalCloseHandler}
          modalTitle={error.title}
          modalMessage={error.message}
        />
      )}
      <Card>
        <form className="form-control" onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={userName}
            id="username"
            type="text"
            onChange={userNameInputHandler}
          ></input>
          <label htmlFor="userage">Age (Years)</label>
          <input
            value={age}
            id="userage"
            type="number"
            min="1"
            onChange={ageInputHandler}
          ></input>
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;