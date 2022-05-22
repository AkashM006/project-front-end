import React from "react";
import "./UserRegistration.css";

function CreateUser() {
  const [email, setEmail] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <h1>Create A User</h1>
          <br />
          <label>
            Name:
            <input
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
            <input
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
            <input
              name="Password"
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Service Engineer
            <input name="Service Engineer" type="radio" />
          </label>
          <label>
            Customer
            <input name="Customer" type="radio" />
          </label>
          <button>Submit!</button>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
