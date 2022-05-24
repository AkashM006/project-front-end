import React from "react";
import Styles from "./UserRegistration.module.css";

function CreateUser() {
  const [email, setEmail] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
          <label>
            <input className={Styles.radio} name="Service Engineer" type="radio" />
            Service Engineer
          </label>
          <label>
            <input className={Styles.radio} name="Customer" type="radio" />
            Customer
          </label>
          <button className={Styles.button}>Submit!</button>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
