import { Outlet } from "react-router-dom";

export default function Employees() {
  
  return (
    <div id="employees"><br />
      <h2>Employees</h2> <br />
      <Outlet />
    </div>
  );
}
