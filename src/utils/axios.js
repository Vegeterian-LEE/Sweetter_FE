import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("accessJWTToken");

const usersInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const sweetInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  headers: {
    Authorization: token,
  },
});

const commentInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/comment`,
  headers: {
    Authorization: token,
  },
});

export { usersInstance, sweetInstance, commentInstance };
