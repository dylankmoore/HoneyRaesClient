import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeeById } from "../../data/employeeData";

export default function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    console.log("EmployeeDetails rendered");
    console.log("Employee ID:", id);
    const fetchEmployeeDetails = async () => {
      try {
        const employeeData = await getEmployeeById(id);
        setEmployee(employeeData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  if (!employee) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>{employee.name}</td>
        </tr>
        <tr>
          <th scope="row">Specialty</th>
          <td>{employee.specialty}</td>
        </tr>
      </tbody>
    </Table>
  );
}
