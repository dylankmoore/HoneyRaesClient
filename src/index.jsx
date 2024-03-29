import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceTickets from "./components/tickets/ServiceTickets";
import TicketsList from "./components/tickets/TicketsList";
import TicketDetails from "./components/tickets/TicketDetails";
import CustomersList from "./components/customers/CustomersList";
import CustomerDetails from "./components/customers/CustomerDetails";
import Customers from "./components/customers/Customers";
import Employees from "./components/employees/Employees";
import EmployeesList from "./components/employees/EmployeesList";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import CreateTicketForm from "./components/tickets/create";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* tickets */}
        <Route path="tickets" element={<ServiceTickets />}>
          <Route index element={<TicketsList />} />
          <Route path="create" element={<CreateTicketForm />} />
          <Route path=":id" element={<TicketDetails />} />
        </Route>

          {/* customers */}
        <Route path ="customers" element={<Customers />}>
          <Route index element={<CustomersList />} />
          <Route path=":id" element={<CustomerDetails />} />
        </Route>

          {/* employees */}
        <Route path ="employees" element={<Employees />}>
          <Route index element={<EmployeesList />} />
          <Route path=":id" element={<EmployeeDetails />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
