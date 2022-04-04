import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getDestinations = async () => {
  const response = await api.get("/api/destinations");
  return response.data;
};

export const getCrew = async () => {
  const response = await api.get("/api/crew");
  return response.data;
};

export const getTechnologies = async () => {
  const response = await api.get("/api/technologies");
  return response.data;
};
