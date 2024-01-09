const Mysql = require("sync-mysql");

const connection = new Mysql({
  host: "localhost",
  user: "root",
  password: "",
  database: "pizzahouse",
});

function emailExists(email) {
  const result = connection.query(
    `Select email from users where email = '${email}'`
  );

  return Boolean(result.length);
}

function signUp(email, password, name) {
  try {
    connection.query(
      `INSERT INTO users (email, password, name) VALUES ('${email}', '${password}', '${name}')`
    );

    return true;
  } catch (err) {
    return false;
  }
}

function login(email, password) {
  try {
    const result = connection.query(
      `SELECT * from users where email = '${email}' and password = '${password}'`
    );

    if (result[0] != null) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}

module.exports = {
  login,
  emailExists,
  signUp,
};
