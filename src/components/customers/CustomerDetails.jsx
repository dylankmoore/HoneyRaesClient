import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomerById } from "../../data/customersData";

export default function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    console.log("CustomerDetails rendered");
    console.log("Customer ID:", id);
    const fetchCustomerDetails = async () => {
      try {
        const customerData = await getCustomerById(id);
        setCustomer(customerData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCustomerDetails();
  }, [id]);

  if (!customer) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>{customer.name}</td>
        </tr>
        <tr>
          <th scope="row">Address</th>
          <td>{customer.address}</td>
        </tr>
      </tbody>
    </Table>
  );
}
