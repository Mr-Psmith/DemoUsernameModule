import React, {useState} from "react";
import "./UserForm.css"



const UserForm = (props) => {

    const [userName, setUserName] = useState("A User name Please");
    const [age, setAge] = useState("an Age please")
    const [userInfo, setUserInfo] = useState("");

    const formSubmitHandler = (event) => {
        setUserInfo(event.target.value)
        console.log(userInfo);
    }

    /* const formSubmitHandler = (event) => {
        setUserName(event.target.value);
        setAge(event.target.value);
        console.log(userName);
    }; */

    const userNameInputHandler = (event) => {
        setUserName(event.target.value);
        console.log(userName);
    };
    const ageInputHandler = (event) => {
        setAge(event.target.value);
        console.log(age);
    };

    return (
        <div className="form-control" onSubmit={formSubmitHandler}>
            <label>Username</label>
            <input onInput={userNameInputHandler}></input>
            <label>Age (Years)</label>
            <input onInput={ageInputHandler}></input>
            <button type="submit">Add User</button>
        </div>
    );
};





export default UserForm;