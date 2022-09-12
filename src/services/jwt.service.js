import axios from "axios";

export const setSession = (access_token) => {
  if (access_token) {
    localStorage.setItem("jwt_access_token", access_token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
  } else {
    localStorage.removeItem("jwt_access_token");
    delete axios.defaults.headers.common["Authorization"];
  }
};
export const getAccessToken = () => {
  return window.localStorage.getItem("jwt_access_token");
};
