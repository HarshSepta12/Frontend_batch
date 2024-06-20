import React from "react";
import { useState } from "react";
// import Form from './Form'
const Form = () => {
  const [movie, setMovie] = useState("");
  const [date, setEmail] = useState("");
  const [profile, setProfile] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    alert("Your form has been submited" + movie + releaseDate +profile);
    setEmail("");
    setMovie("");
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
        <h1>Register Movie</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
             Movie Name
            </label>
            <input
              type="text"
              className="form-control bg-black text-light"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Release Date
            </label>
            <input
              type="date"
              className="form-control bg-black text-light"
              value={date}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Movie File
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
