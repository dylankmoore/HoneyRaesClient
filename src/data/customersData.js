const _apiUrl = "/api/customers";

export const getCustomers = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getCustomerById = (customerId) => {
  const url = `${_apiUrl}/${customerId}`;
  return fetch(url).then((r) => r.json());
};
