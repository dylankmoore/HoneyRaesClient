import { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { getServiceTickets, deleteServiceTicket, completeServiceTicket } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getServiceTickets().then(setTickets);
  }, []);

  const handleDelete = async (ticketId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this ticket?');
  
    if (isConfirmed) {
      try {
        await deleteServiceTicket(ticketId);
  
        // updating the state
        const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId);
        setTickets(updatedTickets);
      } catch (error) {
        console.error('Error deleting ticket:', error);
      }
    }
  };

  const handleComplete = async (ticketId) => {
    try {
      // Send completion request without waiting for response
      completeServiceTicket(ticketId);
  
      // Update the state immediately
      const updatedTickets = tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, dateCompleted: new Date().toISOString() } : ticket
      );
  
      setTickets(updatedTickets);
    } catch (error) {
      console.error("Error completing service ticket:", error);
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th>Details</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}.</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link id="details" to={`${t.id}`}>Details</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Button id="delete" onClick={() => handleDelete(t.id)}>
        Delete
      </Button>
        {t.employeeId && !t.dateCompleted ? 
       <Button id="complete" onClick={() => handleComplete(t.id)} className="m-2">
      Complete Ticket
      </Button> : ""}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
