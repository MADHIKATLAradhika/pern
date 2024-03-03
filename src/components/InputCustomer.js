import React, { Fragment, useState } from "react";

const InputCustomer = () => {
  const [customer_name, setcustomer_name] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [phone_number, setphone_number] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { customer_name, age, location, phone_number };
      const response = await fetch("http://localhost:5000/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Customer List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
          value={customer_name}
          onChange={(e) => setcustomer_name(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          value={phone_number}
          onChange={(e) => setphone_number(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputCustomer;

