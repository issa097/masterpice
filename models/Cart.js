const db = require("../lib/db");

function additem(product_id, user_id, quantity,paymentnumber) {
  const queryText = `INSERT INTO cart (product_id, user_id, quantity ,paymentnumber) VALUES ($1, $2, $3,$4) RETURNING *`;
  const result = [product_id, user_id, quantity,paymentnumber];
  return db.query(queryText, result);
}

function GetItem(user_id) {
  const queryText = `SELECT products.product_name, products.price, products.product_img,cart.quantity FROM cart
    JOIN products ON cart.product_id = products.product_id
    WHERE cart.user_id = $1;`;
  const result = [user_id];
  return db.query(queryText, result);
}

module.exports = {
  additem,
  GetItem,
};
