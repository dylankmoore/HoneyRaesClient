import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployees } from "../../data/employeeData";

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("EmployeesList rendered");
    const fetchEmployees = async () => {
      try {
        const employeeData = await getEmployees();
        setEmployees(employeeData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Specialty</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={`customer-${employee.id}`}>
            <th scope="row">{employee.id}</th>
            <td>{employee.name}</td>
            <td>{employee.specialty}</td>
            <td><Link to={`/employees/${employee.id}`}>Details</Link></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
