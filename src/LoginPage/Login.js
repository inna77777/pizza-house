import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
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
        <button onClick={login}>Login</button>
      </form>
    </section>
  );
};
export default Login;
