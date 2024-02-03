const _apiUrl = "/api/employees";

export const getEmployees = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getEmployeeById = (employeeId) => {
  const url = `${_apiUrl}/${employeeId}`;
  return fetch(url).then((r) => r.json());
};
