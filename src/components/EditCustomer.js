import React, { Fragment, useState } from "react";

const EditCustomer = ({ customer }) => {
  const [customer_name, setcustomer_name] = useState(customer.customer_name);
  const [age, setAge] = useState(customer.age);
  const [location, setLocation] = useState(customer.location);
  const [phoneNumber, setPhoneNumber] = useState(customer.phone_number);
  const [sortBy, setSortBy] = useState(""); // State to track sorting criteria

  const updatecustomer = async () => {
    try {
      const body = { customer_name, age, location, phone_number: phoneNumber };
      const response = await fetch(`http://localhost:5000/customers/${customer.customer_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${customer.customer_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${customer.customer_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Customer</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="customer_name">customer_name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="customer_name"
                  value={customer_name}
                  onChange={e => setcustomer_name(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sortBy">Sort By:</label>
                <select
                  className="form-control"
                  id="sortBy"
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="date">Date</option>
                  <option value="time">Time</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  updatecustomer();
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditCustomer;


