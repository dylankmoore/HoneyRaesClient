// CreateTicketForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getCustomers } from "../../data/customersData";
import { getEmployees } from "../../data/employeeData";
import { createServiceTicket } from "../../data/serviceTicketsData";

export default function CreateTicketForm({ onTicketCreated }) {
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerId: "",
    employeeId: "",
    description: "",
    emergency: false,
  });

  useEffect(() => {
    const getCustomersAndEmployees = async () => {
      try {
        const customersData = await getCustomers();
        const employeesData = await getEmployees();
        setCustomers(customersData);
        setEmployees(employeesData);
      } catch (error) {
        console.error("Error fetching customers and employees:", error);
      }
    };

    getCustomersAndEmployees();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createServiceTicket(formData);
      if (onTicketCreated) {
        onTicketCreated(formData);
      }
      navigate('/tickets');
    } catch (error) {
      console.error("Error creating service ticket:", error);
    }
  };

  return (
    <div id="form">
      <h5>Create A New Service Ticket</h5><br />
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="customerId">Customer:</Label>
        <Input
          type="select"
          name="customerId"
          id="customerId"
          value={formData.customerId}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select a customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </Input>
      </FormGroup>
            <br />
      <FormGroup>
        <Label for="employeeId">Employee:</Label>
        <Input
          type="select"
          name="employeeId"
          id="employeeId"
          value={formData.employeeId}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select an employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </Input>
      </FormGroup>
            <br />
      <FormGroup>
        <Label for="description">Description:</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
            <br />
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="emergency"
            id="emergency"
            checked={formData.emergency}
            onChange={handleInputChange}
          />{" "}
          Emergency?
        </Label>
      </FormGroup>
            <br />

      <Button type="submit" id="submit">Create Service Ticket</Button>
    </Form>
    </div>
  );
}
