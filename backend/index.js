const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];

app.post("/login", (request, response) => {
  const body = request.body;

  const email = body.email;
  const password = body.password;
});

app.post("/signup", (request, response) => {
  const body = request.body;

  console.log(request);

  const name = body.name;
  const email = body.email;
  const password = body.password;

  if (users.find((user) => user.email === email)) {
    return response.json("User already exists", 400);
  }

  users.push({
    name,
    email,
    password,
  });

  console.log("User created email:" + email);

  return response.json("User registered", 200);
});

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
