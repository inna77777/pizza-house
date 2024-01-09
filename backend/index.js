const express = require("express");
const app = express();
const { emailExists, signUp, login } = require("./db.js");
var jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/login", (request, response) => {
  const body = request.body;

  const email = body.email;
  const password = body.password;

  if (login(email, password)) {
    var token = jwt.sign({ email: email }, "blabla");
    return response.json({ token }, 200);
  } else {
    return response.json("Email or password incorrect", 401);
  }
});

app.post("/signup", (request, response) => {
  const body = request.body;

  const name = body.name;
  const email = body.email;
  const password = body.password;

  if (emailExists(email)) {
    return response.json("Email is already taken", 400);
  }

  if (signUp(email, password, name)) {
    var token = jwt.sign({ email: email }, "blabla");
    return response.json({ token }, 200);
  } else {
    return response.json("Server error", 400);
  }
});

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
