import React from "react";
const Login = () => {
  return (
    <section className="m-5">
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br /><br />
        <button>Login</button>
      </form>
    </section>
  );
};
export default Login;
