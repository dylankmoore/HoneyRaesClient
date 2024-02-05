const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getServiceTicketById = (ticketId) => {
  const url = `${_apiUrl}/${ticketId}`;
  return fetch(url).then((r) => r.json());
};

export const createServiceTicket = (ticketData) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticketData),
  }).then((r) => r.json());
};

export const deleteServiceTicket = async (id) => {
  const response = await fetch(`${_apiUrl}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error deleting service ticket with ID ${id}`);
  }
};
