import axios from "axios";

export const api = axios.create({
  //baseURL: "https://json-server-finan.herokuapp.com",
  baseURL: "http://localhost:3001"
});
