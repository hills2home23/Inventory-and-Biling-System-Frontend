import axios from "axios";

export default axios.create({
  baseURL: "https://api.hills2home.com/api/v1",
  //baseURL: "http://localhost:7000/api/v1",
});