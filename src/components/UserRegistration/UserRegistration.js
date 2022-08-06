import axios from "axios";
import React from "react";
import Styles from "./UserRegistration.module.css";
import server from "../../constants";
import { useSelector } from "react-redux";

function CreateUser() {
  const [email, setEmail] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const user = useSelector(state => state.user)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: Name,
      email,
      password: Password
    }
    axios
      .post(`${server}/user`,{data},{headers:{"Authorization": user.token}})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
  })
  };

  return (
    <>
      <div className={Styles.main}>
        <form onSubmit={handleSubmit} className={Styles.form}>
          <h1>Create A User</h1>
          <br />
          <label>
            Name:
            <input className={Styles.input}
              name="Name"
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input className={Styles.input}
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input className={Styles.input}
              name="Password"
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          {/* <label>
            <input className={Styles.radio} name="Service Engineer" type="radio" />
            Service Engineer
          </label>
          <label>
            <input className={Styles.radio} name="Customer" type="radio" />
            Customer
          </label> */}
          <button className={Styles.button}>Submit!</button>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
