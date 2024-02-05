import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomers } from "../../data/customersData";

export default function CustomersList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersData = await getCustomers();
        setCustomers(customersData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={`customer-${customer.id}`}>
            <th scope="row">{customer.id}</th>
            <td>{customer.name}</td>
            <td>{customer.address}</td>
            <td><Link id ="details" to={`/customers/${customer.id}`}>Details</Link></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
