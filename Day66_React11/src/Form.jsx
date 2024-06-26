import React from "react";
import { useState } from "react";
// import Form from './Form'
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    alert("Your form has been submited" + name + email + password + profile);
    setEmail("");
    setName("");
    setPassword("");
    setProfile("");
  };

  return (
    <div className="mb-3">
      <div
        className="container my-5 bg-black text-light p-4"
        style={{
          width: "650px",
          borderRadius: "10px",
          border: "2px solid blue",
        }}
      >
        <h1>Register User</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control bg-black text-light"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control bg-black text-light"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-black text-light"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Profile
            </label>
            <input
              type="file"
              className="form-control bg-black text-light"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>
          <div className="d-grid col-md-6 mx-auto mt-5">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
