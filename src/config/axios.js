import axios from "axios";

export default axios.create({
  baseURL: "https://api.hills2home.com/api/v1",
});