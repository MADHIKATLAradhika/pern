import React, { Fragment } from "react";
import "./App.css";

//components

import InputCustomer from "./components/InputCustomer";
import ListCustomers from "./components/ListCustomers";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputCustomer />
        <ListCustomers />
      </div>
    </Fragment>
  );
}

export default App;
