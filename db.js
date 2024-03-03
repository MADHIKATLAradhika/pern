const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Radhika@123",
  host: "localhost",
  port: 5432,
  database: "perncustomer"
});

module.exports = pool;
