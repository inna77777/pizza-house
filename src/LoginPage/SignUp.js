import React from "react";
const SignUp = () => {
  return (
    <section className="m-5">
      <form action="">
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br /><br />
       <button>Sign Up</button>
      </form>
    </section>
  );
};
export default SignUp;
