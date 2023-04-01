import React, { useState, useRef } from "react";
import "./UserForm.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrepper";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  /* const [userName, setUserName] = useState(""); Taken out when we used ref-s instead
  const [age, setAge] = useState(""); */

  const [error, setError] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    /* if (userName.trim().length === 0 || age.trim().length === 0) {  Taken out when we used ref-s instead*/
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      /*  setError(<ErrorModal modalTitle="Soon to be dynamic" modalMessage="its not hardcoded at all" />); good as well*/
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty values).",
      });
      return;
    }
    if (+enteredAge < 14) {
      setError({
        title: "Invalid age",
        message: "Please Fuck off(enter a valid age, no underagers here (>14))",
      });
      return; /* If we leave this out than this will still print an empty message */
    }
    props.onSaveUserInfo(enteredName, enteredAge);
    /* setAge(""); Taken out when we used ref-s instead
    setUserName(""); 
    Instead we use what we shouldnt mopstly but its okay sometimes: */
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const modalCloseHandler = () => { 
    setError(""); /* or null, or anything false, or falsy value */
  };

  /* const userNameInputHandler = (event) => { Taken out when we used ref-s instead
    setUserName(event.target.value);
  };
  const ageInputHandler = (event) => {
    setAge(event.target.value);
  }; */

  return (
    <Wrapper>
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
            /* onChange={userNameInputHandler} Taken out when we used ref-s instead
            value={userName} */
            id="username"
            type="text"
            ref={nameInputRef} 
          ></input>
          <label htmlFor="userage">Age (Years)</label>
          <input
            id="userage"
            type="number"
            min="1"
            /* onChange={ageInputHandler} Taken out when we used ref-s instead
            value={age} */
            ref={ageInputRef}
          ></input>
          <button type="submit">Add User</button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;