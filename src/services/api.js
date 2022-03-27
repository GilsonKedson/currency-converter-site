import axios from "axios";

const api = axios.create({
  baseURL: "https://currency-converter-brazil.herokuapp.com/",
});

export default api;