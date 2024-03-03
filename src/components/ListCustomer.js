import React, { Fragment, useEffect, useState } from "react";

import EditCustomer from "./EditCustomer";

const ListCustomers = () => {
  const [customers, setcustomers] = useState([]);

  //delete customer function

  const deletecustomer = async id => {
    try {
      const deletecustomer = await fetch(`http://localhost:5000/customers/${id}`, {
        method: "DELETE"
      });

      setcustomers(customers.filter(customer => customer.customer_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getcustomers = async () => {
    try {
      const response = await fetch("http://localhost:5000/customers");
      const jsonData = await response.json();

      setcustomers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getcustomers();
  }, []);

  console.log(customers);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Phone Number</th>
            <th>Created At</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {customers.map(customer => (
            <tr key={customer.customer_id}>
              <td>{customer.description}</td>
              <td>{customer.age}</td>
              <td>{customer.location}</td>
              <td>{customer.phone_number}</td>
              <td>{customer.created_at}</td>
              <td>
                <EditCustomer customer={customer} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletecustomer(customer.customer_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListCustomers;
