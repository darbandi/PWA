import axios from "axios";

export default axios.create({
  baseURL: "https://restcountries.com/",
  headers: {
    "Content-type": "application/json"
  }
});