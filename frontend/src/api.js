import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-3-26-23-38.ap-southeast-2.compute.amazonaws.com:8081/api/auth",
});

export default api;
