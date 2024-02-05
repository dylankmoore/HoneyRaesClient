import { Link, Outlet } from "react-router-dom";

export default function ServiceTickets() {

  return (
    <div id="main">
      <br />
      <h2>Service Tickets</h2><br />
      <Link id="add" to="/tickets/create">Add A Ticket</Link><br /><br />
      <Outlet />
    </div>
  );
}
