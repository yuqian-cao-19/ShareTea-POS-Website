const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;

const { Pool } = require("pg");
const dotenv = require("dotenv").config();

const pool = new Pool({
  user: process.env.PSQL_USER,
  host: process.env.PSQL_HOST,
  database: process.env.PSQL_DATABASE,
  password: process.env.PSQL_PASSWORD,
  port: process.env.PSQL_PORT,
  ssl: { rejectUnauthorized: false },
});

process.on("SIGINT", function () {
  pool.end();
  console.log("Application successfully shutdown");
  process.exit(0);
});

app.get("/cashier/price*", (req, res) => {
  let command =
    "SELECT price FROM recipes where drinkname = '" +
    req.query.parameter +
    "';";
  console.log(command);
  pool
    .query(
      "SELECT price FROM recipes where drinkname = '" +
        req.query.parameter +
        "';"
    )
    .then((query_res) => {
      res.send(query_res.rows[0].price);
      console.log(query_res.rows[0].price);
    });
});

// app.get("/api", (req, res) => {
//   res.json("user1");
// });

app.listen(port, () => {
  console.log("server is running on port" + port);
});
