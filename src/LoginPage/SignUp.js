import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const signup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        password,
        name,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <section className="m-5">
      <form action="">
        <label htmlFor="name">name</label>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          name="name"
          value={name}
          id="name"
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
          value={email}
          id="email"
        />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          name="password"
          value={password}
          id="password"
        />
        <br />
        <br />
        <button onClick={signup}>Sign Up</button>
      </form>
    </section>
  );
};
export default SignUp;
