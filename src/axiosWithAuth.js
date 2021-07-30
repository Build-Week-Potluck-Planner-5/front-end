
import axios from "axios";
const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://potluck-back-end.herokuapp.com",
  });
};
export default axiosWithAuth;

