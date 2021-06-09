import axios from "axios";

export default axios.create({
  baseURL: "https://limitless-waters-16152.herokuapp.com/api/v1",
  //baseURL: "http://localhost:7000/api/v1",
  
});