import axios from "axios";

const usersInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export { usersInstance };
