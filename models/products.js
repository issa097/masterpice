// const db = require("../lib/db");

// function getAllblogs() {
//   return db.query("SELECT * FROM products");
// }
// function getBlog(product_id) {
//   const queryText = "SELECT * FROM products WHERE product_id = $1";
//   const value = [product_id];
//   return db.query(queryText, value);
// }
// // function getBlogid(user_id) {
// //   const queryText = "SELECT * FROM products WHERE user_id = $1";
// //   const value = [user_id];
// //   return db.query(queryText, value);
// // }
// // function getEmail(email) {
// //   const queryText = "SELECT * FROM blog WHERE email = $1";
// //   const value = [email];
// //   return db.query(queryText, value);
// // }
// function newblog(
//   product_name,
//   category_id,
//   price,
//   user_id,
//   product_img,
//   product_dis
// ) {
//   const queryText =
//     "INSERT INTO products ( product_name,  category_id ,price ,user_id,product_img ,product_dis) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *";

//   const values = [
//     product_name,
//     category_id,
//     price,
//     user_id,
//     product_img,
//     product_dis,
//   ];
//   return db.query(queryText, values);
// }
// async function deleteblog(product_id) {
//   const queryText =
//     "UPDATE products SET is_deleted = true WHERE product_id = $1 AND is_deleted = false RETURNING*";
//   const values = [product_id];

//   try {
//     const result = await db.query(queryText, values);
//     console.log(result);

//     if (result.rowCount === 0) {
//       throw new Error("Product not found or already deleted.");
//     }

//     return result.rows[0].is_deleted === ture;
//   } catch (error) {
//     throw error;
//   }
// }

// function updateblog(
//   product_id,
//   product_name,
//   category_id,
//   price,
//   user_id,
//   product_img,
//   product_dis
// ) {
//   const queryText =
//     "UPDATE products SET product_name = $2, category_id = $3 ,price = $4 ,user_id=$5 ,product_img = $6 , product_dis =$7  WHERE product_id = $1 RETURNING *";

//   const value = [
//     product_id,
//     product_name,
//     category_id,
//     price,
//     user_id,
//     product_img,
//     product_dis,
//   ];
//   return db.query(queryText, value);
// }

// module.exports = {
//   getAllblogs,
//   newblog,
//   getBlog,
//   deleteblog,
//   updateblog,
//   //   getBlogid
//   // getEmail,
//   //   loginUser
// };


const db = require("../lib/db");

function getAllblogs() {
  return db.query("SELECT * FROM products WHERE is_deleted = false");
}

function getBlog(product_id) {
  const queryText = "SELECT * FROM products WHERE product_id = $1 AND is_deleted = false";
  const value = [product_id];
  return db.query(queryText, value);
}

function newblog(product_name, category_id, price, user_id, product_img, product_dis) {
  const queryText = "INSERT INTO products (product_name, category_id, price, user_id, product_img, product_dis) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
  const values = [product_name, category_id, price, user_id, product_img, product_dis];
  return db.query(queryText, values);
}

async function deleteblog(product_id) {
  const queryText = "UPDATE products SET is_deleted = true WHERE product_id = $1 AND is_deleted = false RETURNING *";
  const values = [product_id];

  try {
    const result = await db.query(queryText, values);

    if (result.rowCount === 0) {
      throw new Error("Product not found or already deleted.");
    }

    return true; // Return true to indicate a successful deletion
  } catch (error) {
    throw error;
  }
}

function updateblog(product_id, product_name, category_id, price, user_id, product_img, product_dis,is_deleted) {
  const queryText = "UPDATE products SET product_name = $2, category_id = $3, price = $4, user_id = $5, product_img = $6, product_dis = $7,is_deleted = $8 WHERE product_id = $1  RETURNING *";
  const value = [product_id, product_name, category_id, price, user_id, product_img, product_dis,is_deleted];
  return db.query(queryText, value);
}

module.exports = {
  getAllblogs,
  newblog,
  getBlog,
  deleteblog,
  updateblog,
};
  
