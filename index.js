const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes

// Create a customer
app.post("/customers", async (req, res) => {
  try {
    const { name, age, location, phone_number } = req.body;
    const newcustomer = await pool.query(
      "INSERT INTO customer (name, age, location, phone_number) VALUES($1, $2, $3, $4) RETURNING *",
      [name, age, location, phone_number]
    );
    res.json(newcustomer.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// Get all customers
app.get("/customers", async (req, res) => {
  try {
    const allcustomers = await pool.query("SELECT * FROM customer");
    res.json(allcustomers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// Get a customer
app.get("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await pool.query("SELECT * FROM customer WHERE customer_id = $1", [id]);
    res.json(customer.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// Update a customer
app.put("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, location, phone_number } = req.body;
    const updatecustomer = await pool.query(
      "UPDATE customer SET name = $1, age = $2, location = $3, phone_number = $4 WHERE customer_id = $5",
      [name, age, location, phone_number, id]
    );
    res.json("customer was updated!");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// Delete a customer
app.delete("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletecustomer = await pool.query("DELETE FROM customer WHERE customer_id = $1", [id]);
    res.json("customer was deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

