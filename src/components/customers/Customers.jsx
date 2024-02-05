import { Outlet } from "react-router-dom";

export default function Customers() {
  
  return (
    <div id="customers"><br />
      <h2>Customers</h2> <br />
      <Outlet />
    </div>
  );
}
