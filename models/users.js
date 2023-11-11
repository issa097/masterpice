const db = require("../lib/db");
const jwt = require("jsonwebtoken");
const key = "issa";
const bcrypt = require("bcrypt");

function getAllData() {
  return db.query("SELECT * FROM users  WHERE is_deleted=false");
}
function getUser(user_id) {
  const queryText =
    "SELECT * FROM users WHERE user_id = $1 AND is_deleted = false";
  const value = [user_id];
  return db.query(queryText, value);
}
function getEmail(email) {
  const queryText = "SELECT * FROM users WHERE email = $1";
  const value = [email];
  return db.query(queryText, value);
}
// function newUser(username, email, password) {
//   const queryText =
//     "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)";
//   const values = [username, email, password];
//   return db.query(queryText, values);
// }

function newUser(username, email, password, role) {
  // Hash the password before inserting it into the database
  return bcrypt.hash(password, 10).then((hashedPassword) => {
    const queryText =
      "INSERT INTO users (username, email, password , role)  VALUES ($1, $2, $3 ,$4) ";
    const values = [username, email, hashedPassword, role];
    return db.query(queryText, values);
  });
}

function deleteUser(user_id) {
  const queryText = "UPDATE users SET is_deleted = true WHERE user_id = $1";
  const value = [user_id];
  return db.query(queryText, value);
}

function updateUser(user_id, username, email, password) {
  const queryText =
    "UPDATE users  SET username = $2, email = $3, password = $4  WHERE user_id = $1   RETURNING * ";
  const value = [user_id, username, email, password];
  return db.query(queryText, value);
}
function decodeToken(token, key) {
  let userData = {};
  jwt.verify(token, key, (err, decoded) => {
    // console.log("token");
    // console.log(token);
    // console.log(key);
    // console.log(decoded);
    // console.log("decoded");
    userData = decoded;
    return decoded;
  });

  return userData;
}
function loginUser(user_id, email, password) {
  const queryText =
    "UPDATE users  SET  email = $3, password = $4  WHERE user_id = $1";
  const value = [user_id, email, password];
  return db.query(queryText, value);
}

module.exports = {
  getAllData,
  newUser,
  getUser,
  deleteUser,
  updateUser,
  getEmail,
  decodeToken,
  loginUser,
};
